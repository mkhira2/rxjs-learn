import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { from } from 'rxjs/observable/from';
import { merge } from 'rxjs/internal/observable/merge';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/skipUntil';

// merge operator
const mergeObservable1 = Observable.create((observer: any) => {
    observer.next('Kenji')
})

const mergeObservable2 = Observable.create((observer: any) => {
    observer.next('Hirabayashi')
})

const mergeObservable3 = merge(mergeObservable1, mergeObservable2);
mergeObservable3.subscribe((x: any) => addItem(x));

// map operator
Observable.create((observer: any) => {
    observer.next('Hello world')
}).map((x: any) => x.toUpperCase())
.subscribe((x: any) => addItem(x))

// pluck operator
from([
    { first: 'Kenji', last: 'Hirabayashi', age: '32' },
    { first: 'Jose', last: 'Altuve', age: '29' },
    { first: 'Carlos', last: 'Correa', age: '24' }
]).pluck('last')
.subscribe((x: any) => addItem(x));

// skipUntil operator
const skipuntilObservable1 = Observable.create((observer: any) => {
    let i = 1;
    setInterval(() => {
        observer.next(i++)
    }, 1000)
})

const skipuntilObservable2 = new Subject;

setTimeout(() => {
    skipuntilObservable2.next('Howdy')
}, 5000)

const skipuntilObservable3 = skipuntilObservable1.skipUntil(skipuntilObservable2)

skipuntilObservable1.subscribe((x: any) => addItem(x));
skipuntilObservable3.subscribe((x: any) => addItem(x));

// util method
function addItem(val: any) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

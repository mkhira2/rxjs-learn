import { Observable } from "rxjs/Observable";
import { fromEvent } from 'rxjs/Observable/fromEvent';

const observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    const subscription = observable.subscribe(
        (x: any) => addItem(x)
    )
}, 2000)

function addItem(val: any) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

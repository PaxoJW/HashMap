import {hashMap} from "./hashMap.mjs";

const test = hashMap() // or HashMap() if using a factory

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('apple', 'redyellowgreen');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('apple', 'red');

console.log(test.get('lion')); //golden
console.log(test.get('apple')); //redyellowgreen

console.log(test.has('dog')); //false
console.log(test.has('monkey')); //false
console.log(test.has('hat')); //true

console.log(test.length()); //6

console.log(test.map);

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
test.set('lion', 'golden');
test.set('apple', 'redyellowgreen');
console.log(test.length()); //2

console.log(test.map);
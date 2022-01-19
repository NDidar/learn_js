'use strict';

var number = 1;
let number2 = 2;
const number3 = 3;

var string = 'Hello world';
var boolean = false;
var sym = Symbol();
null;
undefined;
var obj = {
    name: 'Didar',
    age: 25,
    isMarried: true
}

console.log(obj.isMarried? 'da zenat' : 'net ne zenat')

let arr = ['hello my friend', 'how a u', 'what are u doing']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log(arr)
//
// confirm("Hello World!")

let incr = 10,
    decr = 10;

let ostatok = 9;

console.log(ostatok%3? "true" : "false")

console.log(incr++, --decr)
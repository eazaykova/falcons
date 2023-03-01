'use strict';

let obj = {};

let a = new A();
let b = new B();

alert(a == b);

function A() { return obj; }
function B() { return obj; }
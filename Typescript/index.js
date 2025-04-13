"use strict";
function caller(callback) {
    setTimeout(callback, 3000);
}
function hello() {
    console.log("hello");
}
caller(hello);

var i = 0;
for (i=0; i<=10; i++) {
    document.write("Hello World!");
    document.write("<br>");
}

var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);
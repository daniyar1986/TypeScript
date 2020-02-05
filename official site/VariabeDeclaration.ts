var a = 10;

function f() {
    var message = "Hello World";
    return message;
}

console.log(f());

function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f1();
console.log(g());

function f2() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(f2());

function f3(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f3(true));  // returns '10'
console.log(f3(false)); // returns 'undefined'

'use stric';

function say(word) {
    console.log('Said ' + word);
}

function greet(msg) {
    say(msg);
}

let w = 'JS test';
greet(w);

var somefn = (arg) => {
    console.log('SOME FUNC WITH ARG: ' + arg);
};

somefn('Greet arg');

function logGreeting(fn) {
    fn();
}

var txt = 'Custom txt for arrow fn!!';
logGreeting((t = txt) => console.log('Some arrow function here... ' + t));

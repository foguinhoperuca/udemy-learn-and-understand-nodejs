'use stric';

const greet = require('./greet');
const simple_sum = require('./simple_sum');
const Person = require('./person');
const ref_value = require('./ref_value');
const multlang = require('./multlang');
const util = require('util');

// greet('Jeff');

a = 1;
b = 2;
c = simple_sum(a, b);
// console.log(`With simple sum: ${c}`);

// var p = {
//     name: "John",
//     surname: "Doe",
//     say: function(word) {
//         console.log("Hello! My name is " + this.name + ' ' + this.surname + '. Would you said: ' + word + '!?');
        
//     }
// };
// p.say('special meaning');


// var john = new Person('John', 'Doe Jr');
// john.say('hi!!');
// john.greet();

// var jane = new Person('Jane', 'Doe');
// jane.greet();

// console.log(john.__proto__);
// console.log(jane.__proto__);
// console.log(john.__proto__ === jane.__proto__);

// let e = 3;
// ref_value.by_value(e);
// console.log(e);
// let f = {};
// f.prop1 = {};
// ref_value.by_ref(f);
// console.log(f);

// let fname = 'Jane';
// ((lname) => {
//     let fname = 'John';
//     console.log(fname + ' ' + lname);
// })('Doe');
// console.log(fname);

multlang.en();
multlang.es();
multlang.pt();

util.log('simple sum: ' + simple_sum(a, b));

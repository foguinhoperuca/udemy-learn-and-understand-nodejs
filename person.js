'use stric';

var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
};

Person.prototype.say = function(word) {
    console.log(`Said: ${word}`);
};

Person.prototype.greet = function() {
    this.say('Hello there!!');
};

module.exports = Person;

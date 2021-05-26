const assert = require('chai').assert;
const  pers = require('../person');

//let p = new pers.Person("mila",29);
//p.print();
let object = new pers.Person('Jack',21);
describe('Person',() => {
    it('Person name Sholud be jack',()=>{
        assert.equal(object.getName(),'Jack');
    });
    it('Person age sholud be above 21',()=>{
       assert.equal(object.getAge(),21);
    });
});
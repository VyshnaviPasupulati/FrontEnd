const assert = require('chai').assert;
const ex2 = require('../example2');

describe('Hello', () => {
    it('Example2 sayHello sholud return hello',() => {
        assert.equal(ex2.sayHello(),'hello');
    });
    it('Example2 sayHello should return type string',() =>{
        assert.typeOf(ex2.sayHello(),'string');
    });
});    
describe('GoodBye',()=>{
    it('Example2 sayBye sholud return Bye Bye',() =>{
        assert.equal(ex2.sayBye(),'GoodBye');
    });
    it('Example2 sayBye sholud return type string',() =>{
        assert.typeOf(ex2.sayBye(),'string');
    })
});
const assert = require('chai').assert;
const ex1 = require ('../example1');

describe('Example1',() => {
    describe('Add',()=>{
        it('Example1 add should return 10',() =>{
            assert.equal(ex1.add(5,5),10);
        });
        it('Example1 add should return type number',() =>{
            assert.typeOf(ex1.add(5,5),'number');
        });
    });
});
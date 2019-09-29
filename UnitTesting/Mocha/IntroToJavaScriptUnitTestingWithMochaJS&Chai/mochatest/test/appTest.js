 //const assert = require('assert') //default Node test library

//First test: just test one thing

//  const assert = require('chai').assert; // the test library
//  const app = require('../app'); // module we are testing

//  describe('App', function(){
//      it('app should return hello', function(){
//          assert.equal(app(), 'hello');
//      });
//  });

 //end first test 

//second test: testing a couple of functions in a module; when you don't want to import everything 

// const assert = require('chai').assert; // the test library
// const sayHello = require('../app').sayHello; // module we are testing
// const addNumbers = require('../app').addNumbers;

// describe('App', function(){
//     it('app should return hello', function(){
//         let result = sayHello();
//         assert.equal(result, 'hello');
//     });

//     it('sayHello should return type string', function(){
//         let result = sayHello();
//         assert.typeOf(result, 'string');
//     });

//     it('addNumbers should be above 5', function(){
//         let result = addNumbers(5,5);
//         assert.isAbove(result, 5);
//     })

//     it('addNumbers should return type number', function(){
//         let result = addNumbers(5,5);
//         assert.typeOf(result, 'number');
//     })
// });

//end second test

//third test: when you want to import the entire module 
// const assert = require('chai').assert; // the test library
 
// const app = require('../app'); 

// describe('App', function(){
//     it('app should return hello', function(){
//         let result = app.sayHello();
//         assert.equal(result, 'hello');
//     });

//     it('sayHello should return type string', function(){
//         let result = app.sayHello();
//         assert.typeOf(result, 'string');
//     });

//     it('addNumbers should be above 5', function(){
//         let result = app.addNumbers(5,5);
//         assert.isAbove(result, 5);
//     })

//     it('addNumbers should return type number', function(){
//         let result = app.addNumbers(5,5);
//         assert.typeOf(result, 'number');
//     })
// });

// end third test

// third test upgrade 1: use variables for results and the describe function

// const assert = require('chai').assert; // the test library
 
// const app = require('../app'); 

// //Results
// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5,5);
 
// describe('App', function(){
//     it('app should return hello', function(){
//         //let result = app.sayHello();
//         assert.equal(sayHelloResult, 'hello');
//     });

//     it('sayHello should return type string', function(){
//         //let result = app.sayHello();
//         assert.typeOf(sayHelloResult, 'string');
//     });

//     it('addNumbers should be above 5', function(){
//         //let result = app.addNumbers(5,5);
//         assert.isAbove(addNumbersResult, 5);
//     })

//     it('addNumbers should return type number', function(){
//         //let result = app.addNumbers(5,5);
//         assert.typeOf(addNumbersResult, 'number');
//     })
// });
//end third test upgrade 1

// third test upgrade 2: use nested describe to group tests and separate them in console test output

const assert = require('chai').assert; // the test library
 
const app = require('../app'); 

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
 
describe('App', function(){
    describe('sayHello()', function(){
        it('app should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });

    });

    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        })
    
        it('addNumbers should return type number', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        })

    });

 

 
});
//end third test upgrade 1
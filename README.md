# test-driven-nodejs-development
test-driven-nodejs-development
**Table of Contents**
- [Introduction To Mocha](#Introduction-To-Mocha)
  - [Installation](#installation)
    - [NPM Install (npm)](#npm-install)
  - [Starting with mocha](#starting-with-mocha)
  - [Introduction to Assertion](#introduction-to-assertion)
  - [ASynchronous code Testing](#aSynchronous-code-testing)
  - [Testing with Nodejs](#testing-with-nodejs)
  - [Error Handling With Mocha](#error-handling-with-mocha)
  - [Error Handling In Nodejs Style](#error-handling-in-nodejs-style)
  - [Integrating With Mocha Hooks](#integrating-with-mocha-hooks)
  - [Hooks In Details](#hooks-in-details)
  - [Describe Hooks](#describe-hooks)
  
#Introduction To Mocha#
Mocha is a Javascript testing framework, which runs on nodejs and browser. It is mostly use to test synchronous and asynchronous Javascript code. Easy to use and it's also provides you simple test case results.

##Installation##
This library is available on **npm**. Install with **npm**:

###NPM Install(npm)###
```bash
$ npm install -g mocha
```
Above command will install mocha globally to your npm environment.

##Starting with mocha##
When you work on TDD(Test Driven Development), You need to take care of your project structure. Where you will put your test cases on all. I have basically created a test folder where i put all test cases.
```bash
$ mkdir test
```
Once you create a testing folder, Just create your first mocha test case. ie. **testing.js** It would be something like
```js
//1-start-with-mocha.js
var assert = require("assert")
describe('String', function(){
    describe('#substring()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, 'True Developer!! Testing is hardest thing to do...'.indexOf('developer'));
        });
    });
});
```
Output would be:
String
    #substring()
      ✓ should return -1 when the value is not present

###Explaination of Previous Code###
**describe** is use to describe different level of block of your code. **it** is to specify the test case that you have created.

##Introduction to Assertion##
Mocha is very flexible to use any of the assertion library. If it throws error it will work with mocha. There are lots of assertion library available in cloud. I personally prefer shouldjs and chaijs. You can use native assertion module of node.

###Using NodeJs assert Module###
```js
var assert = require("assert");
describe('String', function(){
    describe('#substring()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, 'True Developer!! Testing is hardest thing to do...'.indexOf('developer'));
        });
    });
});
```
###Using ShouldJs###
```bash
$  npm install should --save-dev
```
```js
//2-starting-to-shouldjs.js
var should = require('should')
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        })
    })
})
```

##Synchronous code Testing##
By default javascript environment is sync in nature(Not nodejs ;) ). When you don't callback to test cases, Mocha runs all test cases serially and sequentially.
```js
//3-synchronous-testing.js
var should = require('should')
describe('Array', function () {
    describe('#indexOf()', function () {
        it('Test Case-1: should return -1 when the value is not present', function () {
            [1, 2, 3].indexOf(5).should.equal(-1);
            [1, 2, 3].indexOf(0).should.equal(-1);
        });
    });
});
describe('String', function () {
    describe('#substring()', function () {
        it('Test Case-2: should return -1 when the value is not present', function () {
            'True Developer!! Testing is hardest thing to do...'.indexOf('developer').should.equal(-1);
        });
    });
});
```
##ASynchronous code Testing##
Development environment like nodejs, is async in nature. Mocha provides you such design pattern where you can define callback function. Call it when you done with it.
```js
//4-asynchronous-testing.js
var should = require('should')
describe('Array', function () {
    describe('#indexOf()', function () {
        it('Test Case-1: should return -1 when the value is not present', function (done) {
            setTimeout(function () {
                [1, 2, 3].indexOf(5).should.equal(-1);
                [1, 2, 3].indexOf(0).should.equal(-1);
                done();
            }, 1000)
        });
    });
});
describe('String', function () {
    describe('#substring()', function () {
        it('Test Case-2: should return -1 when the value is not present', function (done) {
            setTimeout(function () {
                'True Developer!! Testing is hardest thing to do...'.indexOf('developer').should.equal(-1);
                done();
            }, 500);
        });
    });
});
```
##Testing With Nodejs##
In nodejs you mostly deals with async libraries. To show how to use mocha on node, I have created a dummy crud operation on mogoDb using mongoose.js.
```js
//5-testing-with-nodejs.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Cat = require('../db/cat');
describe('Cat Modal', function () {
    describe('#create()', function () {
        it('should return cat when cat has created', function (done) {
            Cat.find({}).remove(function () {
                var cat = new Cat({name: 'Deepak'});
                cat.save(function (error, cat) {
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<');
                    console.log('%j', cat);
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<');
                    done();
                })
            });
        });
    });
});
```
##Error Handling With Mocha##
The real purpose of testing is to write test cases which can be use in future in case of any modification of the Api without understanding the logic behind it.
Here i have given small demonstration how we can handles error in api
```js
//6-error-handling-with-mocha.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Cat = require('../db/cat');
describe('Cat Modal', function () {
    describe('#create()', function () {
        it('should fail since cat is already created with name Billi', function (done) {
            var cat = new Cat({name: 'Billi'});
            cat.save(function (error, cat) {
                if (error) {
                    return done(error)
                }
                //   throw error;
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<');
                console.log('%j', cat);
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<');
                done();
            })
        });
    });
});
```
##Error Handling In Nodejs Style##
In nodejs there you need to define a callback to every single IO Async operation. You can pass callback of mocha to that IO operation. It will work like charm.
```js
//7-error-handling-in-nodejs-style.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Cat = require('../db/cat');
describe('Cat Modal', function () {
    describe('#create()', function () {
        it('should fail since cat is already created with name Deepak', function (done) {
            var cat = new Cat({name: 'Deepak'});
            cat.save(done)
        });
    });
});
```
##Integrating With Mocha Hooks##
Mocha provide us some predefined hooks like before(), after(), beforeEach(), afterEach(), that can be used on some predefined situation as per user requirement to clean the test cases.
```js
//8-integrating-with-mocha-hooks.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var should = require('should')
var Cat = require('../db/cat');
describe('Connection', function () {
    var tobi = new Cat({name: 'tobi'})
        , loki = new Cat({name: 'loki'})
        , jane = new Cat({name: 'jane'});
    beforeEach(function (done) {
        Cat.remove({}, function (err) {
            console.log('collection dropped');
            Cat.create([tobi, loki, jane], done);
        });
    })
    describe('#find()', function () {
        it('respond with matching records', function (done) {
            Cat.find({}, function (err, res) {
                if (err) return done(err);
                res.should.have.length(3);
                done();
            })
        })
    })
});
```

# test-driven-nodejs-development
test-driven-nodejs-development
**Table of Contents**
- [Introduction To Mocha](#Introduction-To-Mocha)
  - [Installation](#installation)
    - [NPM Install (npm)](#npm-install)
  - [Starting with mocha](#starting-with-mocha)
    - [Bootstrap.js](#bootstrap.js)
    - [Config.json](#Config.json)
    - [plug.json](#plug.json)
  - [Mongoose Domain and Modal](#mongoose-domain-n-modal)
    - [mongooseDomain](#mongoose-domain)
      - [Define User Domain](#define-user-domain)
      - [User Modal](#user-modal)
  - [How to define Routes ](#how-to-define-routes)
    - [Route](#route)
  - [How to use ECMA6 feature](#how-to-use-ecma6-feature)
  - [Lets Build Together](#lets-build-together)
  - [Revision History](#revision-history)

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
When you work on TDD(Test Driven Development), You need to take care of your project structure. Where you will put your test cases on all. I basically create a test folder where i put all test cases.
```bash
$ mkdir test
```
Once you create a testing folder, Just create your first mocha test case. ie. **testing.js** It would be something like
```js
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



``Bootstrap.js`` is a task runner file which executes on start of application according to appropriate environment settings.
See below given snippet for quick start to create task named ``Test`` and run on ``development`` environment
```javascript
module.exports = function (environment, callback) {

    //Add your task name here
    var env = {
        "development": [Test]
    };

    //Create your task like function
    function Test(callback) {
        log.cool('Test Task Runner');
        callback(null, 'Test Task Runner')
    }
};
```

###Config.json###
``Config.json`` contains all the application level configuration variables. Use config.json file by ``_config`` as global variable.
```javascript
"development": {
    "server": {
      "host": "localhost",
      "port": "7002",
      "allowCrossDomain": true
    },
    "database": {
      "url": "mongodb://localhost:27017/boilerplate",
      "poolSize": 5,
      "tryToConnect": true
    },
    "cookie": {
      "password": "secret",
      "cookie": "hm-boilerplate",
      "redirectTo": "/login",
      "isSecure": false
    },
    "redis": {
      "resource": "",
      "host": "enter-your-redis-host-name",
      "port": 17203,
      "password": "your-password"
    }
  }
```

###plug.json###
``plug.json`` you can plug/unplug your boilerplate extra feature like Hapi Swagger etc using plug.js.
```javascript
{
  "hapiPlugin": {
    "Swagger": true, //Yes, I want Hapi Swagger
    "hapiAuthCookie": true //Yes, I want AuthCookie
  },
  "ecma6Plugin": {
    "enabled": true, //Yes, I want to enable ECMAScript6
    "debug": false //But I dont want to see debug result
  }
}
```
##Mongoose Domain and Modal##

###mongooseDomain###
``mongooseDomain`` is a home for all mongoose domain. You just have to create file like ``User.js``, define mongoose schema into file, that's all.
You can access your mongoose modal form any where in boilerplate (routes, bootstarp files) by ``Modal`` object.
Examples are given below:

####Define User Domain####
``Define User Domain`` in /mongooseDomain/User.js
```javascript
"use strict";

//Define User Schema
//Refer: http://mongoosejs.com/docs/schematypes.html
module.exports = {
    username: String,
    password: String
};
```
####User Modal####
Use ``User Modal`` any where from routs / bootstrap
```javascript
//Save New User
new Modal.User({
      username: "admin",
      password: "admin"
    }).save(function (err, result) {
               if (err) {
                  log.error("Error Save Record: " + err);
               } else {
                  log.cool('User Save Successfully');
               }
       })

//Get User
Modal.User.find({username: 'admin'}, function (err, data) {
            if (err) {
                log.error(err);
            } else {
                log.cool(data);
            }
})
```
##How to define Routes##

###Route###
``route`` is a folder where we can define routs. Create folder in side route folder or you can directly create file with any name we want. File should follow this type of syntax. Here you can write handlers in ``Javascript ECMAScript-6`` syntax like below.
```javascript
"use strict";
var Joi = require('joi');
//Routs Lists
module.exports = [
    {
        path: '/sample/test/special',
        method: 'GET',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: (request, reply)=> {
                reply({status: 'my ecma6 special reply'});
            }
        }
    },
    {
        path: '/sample/test/test2',
        method: ['GET', 'POST'],
        config: {
            description: 'Get Test-2',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am Test-2 API'});
            }
        }
    },
    {
        //Here you can add more routs (Hapi Syntax)
        //Refer: http://hapijs.com/tutorials/routing
    }
];
```

##How to use ECMA6 feature##
We have introduced a new way to require special ECMA6 supporting files. Use ``requireEcma6`` instead of ``require`` to include ecma6 file. It will compile ecma6 files to ecma5 using ``Traceur`` module.
As result, It will generate a compiled version of file in ``custome_modules/es6Support/temp`` folder. It means when you require ecma6 files you have to pass relative path of your es6 file according to temp directory.
By default we can use ecma6 syntax on route directory and bootstrap.js file.

##Lets Build Together##
Just open an issue in case found any bug(There is always a scope of improvement). We are always open for suggestion / issue / add new feature request. Fork and start creating pull request. :-)

##Revision History##
* **Version v0.0.1**: The first poc release v0.0.1.
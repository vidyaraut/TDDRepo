/**
 * Created by deepak.m.shrma@gmail.com on 17/3/15.
 * Git: https://github.com/deepakshrma
 */

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
//var should = require('should')
//var Cat = require('../db/cat');
//describe('hooks', function () {
//    var datas = [];
//    before(function () {
//        // runs before all tests in this block
//        var tobi = new Cat({name: 'tobi'})
//            , loki = new Cat({name: 'loki'})
//            , jane = new Cat({name: 'jane'});
//        datas.push(tobi);
//        datas.push(loki);
//        datas.push(jane);
//        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>before<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//        return Cat.remove({}).exec();
//    })
//    after(function () {
//        // runs after all tests in this block
//        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>after<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//    })
//    beforeEach(function (done) {
//        // runs before each test in this block
//        Cat.find({}, function (err, res) {
//            if (err) return done(err);
//            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>beforeEach<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//            console.log('%j', res);
//            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>beforeEach<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//
//            done();
//        })
//    })
//    afterEach(function () {
//        // runs after each test in this block
//        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>afterEach<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//    })
//    // test cases
//    describe('#create1()', function () {
//        it('create with records', function () {
//            return Cat.saveQ(datas);
//        })
//    })
//// test cases
//    describe('#create2()', function () {
//        it('create with records', function () {
//            return Cat.saveQ(datas);
//        })
//    })
//})

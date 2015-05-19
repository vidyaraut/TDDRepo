/**
 * Created by deepak.m.shrma@gmail.com on 17/3/15.
 * Git: https://github.com/deepakshrma
 */

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
//var should = require('should')
//var Cat = require('../db/cat');
//describe('Connection', function () {
//    var tobi = new Cat({name: 'tobi'})
//        , loki = new Cat({name: 'loki'})
//        , jane = new Cat({name: 'jane'});
//
//    beforeEach(function (done) {
//        Cat.remove({}, function (err) {
//            console.log('collection dropped');
//            Cat.create([tobi, loki, jane], done);
//        });
//    })
//
//    describe('#find()', function () {
//        it('respond with matching records', function (done) {
//            Cat.find({}, function (err, res) {
//                if (err) return done(err);
//                res.should.have.length(3);
//                done();
//            })
//        })
//    })
//});
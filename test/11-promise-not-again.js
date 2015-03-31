/**
 * Created by deepak on 17/3/15.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
var should = require('should')
var Cat = require('../db/cat');
describe('Connection', function () {
    var tobi = new Cat({name: 'tobi'})
        , loki = new Cat({name: 'loki'})
        , jane = new Cat({name: 'jane'});

    beforeEach(function () {
        return Cat.remove({}).exec().then(function (err) {
        });
    })

    describe('#find()', function () {
        it('create with records', function () {
            return Cat.saveQ([tobi, loki, jane]);
        })
    })
})

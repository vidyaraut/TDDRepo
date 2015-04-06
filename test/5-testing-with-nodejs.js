/**
 * Created by deepak on 17/3/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Cat = require('../db/cat');
describe('Cat Modal', function () {
    describe('#create()', function () {
        it('should return cat when cat has created', function (done) {
            Cat.find({}).remove(function () {
                var cat = new Cat({name: 'Billi'});
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




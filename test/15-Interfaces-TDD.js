/**
 * Created by deepak.m.shrma@gmail.com on 17/3/15.
 * Git: https://github.com/deepakshrma
 */

//how to run..
//mocha --ui tdd
var assert = require('assert')
suite('Array', function(){
    setup(function(){
        // ...
    });

    suite('#indexOf()', function(){
        test('should return -1 when not present', function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});
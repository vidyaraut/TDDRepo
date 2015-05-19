/**
 * Created by deepak on 17/3/15.
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
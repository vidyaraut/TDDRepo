/**
 * Created by deepak on 17/3/15.
 */
var Cat = require('./cat');

Cat.find({}).remove(function () {
    Cat.create(
        {
            name: 'kim'
        },
        {
            name: 'tim'
        },
        {
            name: 'rim'
        },
        {
            name: 'zim'
        }
    );
});
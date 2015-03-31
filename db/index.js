/**
 * Created by deepak on 17/3/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

require('./seeds')
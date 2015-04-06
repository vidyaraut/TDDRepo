/**
 * Created by deepak on 17/3/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var q = require('q'),
    _ = require('lodash');

var CatSchema = new Schema({name: {type: String, required: true, index: {unique: true}}});
CatSchema.statics.saveQ = function (catData) {
    var defer = q.defer();
    if (!_.isArray(catData)) {
        var cat = new CatModel(catData)
        cat.save(catData, function (error, cat) {
                if (error)
                    defer.reject(error);
                defer.resolve(cat);
            }
        )
    } else {
        CatModel.create(catData, function (error, cat) {
                if (error)
                    defer.reject(error);
                defer.resolve(cat);
            }
        )
    }
    return defer.promise;
};
CatSchema.statics.findQ = function (options) {
    var defer = q.defer();
    CatModel.find(options, function (error, cat) {
            if (error)
                defer.reject(error);
            defer.resolve(cat);
        }
    )
    return defer.promise;
};
var CatModel = mongoose.model('Cats', CatSchema);
//Cat.index({name: 1}, {unique: true});
module.exports = CatModel;

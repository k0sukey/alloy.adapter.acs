exports.definition = {
    config: {
        adapter: {
            type: "objects",
            collection_name: "test"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("objects", exports.definition, []);

collection = Alloy.C("objects", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
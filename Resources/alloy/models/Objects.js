exports.definition = {
    config: {
        columns: {
            active: "boolean"
        },
        defaults: {},
        adapter: {
            type: "acs",
            collection_name: "objects"
        },
        settings: {
            object_name: "",
            object_method: "Objects"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            setClassname: function(_param) {
                this.config.settings["object_name"] = _param;
            },
            getClassname: function() {
                return this.config.settings["object_name"];
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            setClassname: function(_param) {
                this.config.settings["object_name"] = _param;
            },
            getClassname: function() {
                return this.config.settings["object_name"];
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("objects", exports.definition, []);

collection = Alloy.C("objects", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
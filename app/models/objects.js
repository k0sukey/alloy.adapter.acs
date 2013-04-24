exports.definition = {
    config: {
        "adapter": {
            "type": "objects",
            "collection_name": "test"
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
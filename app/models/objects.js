exports.definition = {
    config: {
        "columns" : {
            "active" : "boolean"
        },
        "defaults": {},
        "adapter": {
            "type": "acs",
            "collection_name": "objects"
        },
        "settings" : {
            "object_name" : "",
            "object_method" : "Objects"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            setClassname: function(_param){
                this.config.settings['object_name'] = _param;
            },
            getClassname: function(){
                return this.config.settings['object_name'];
            },
            show: function(_params){
                var that = this;
                var data = {
                    classname: this.config.settings['object_name']
                };

                if (_params.id) {
                    data.id = _params.id;
                } else {
                    data.ids = _params.ids;
                }

                this.config.Cloud.Objects.show(data, function(e){
                    if (e.success) {
                        if (_params.success) {
                            _params.success(new model(e[data.classname][0]));
                        }
                    } else {
                        Ti.API.error(e);
                        if (_params.error) {
                            _params.error(that, (e.error && e.message) || e);
                        }
                    }
                });
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            setClassname: function(_param){
                this.config.settings['object_name'] = _param;
            },
            getClassname: function(){
                return this.config.settings['object_name'];
            }
        });
        return Collection;
    }
};
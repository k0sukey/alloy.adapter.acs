exports.definition = {
    config: {
        "columns" : {
            "active" : "boolean"
        },
        "adapter": {
            "type": "acs",
            "collection_name": "users"
        },
        "settings" : {
            "object_name" : "users",
            "object_method" : "Users"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            login: function(_params){
                var that = this;
                this.config.Cloud.Users.login({
                    login: _params.login,
                    password: _params.password
                }, function(e){
                    if (e.success) {
                        if (_params.success) {
                            _params.success(new model(e.users[0]));
                        }
                    } else {
                        Ti.API.error(e);
                        if (_params.error) {
                            _params.error(that, (e.error && e.message) || e);
                        }
                    }
                });
            },
            logout: function(_params){
                var that = this;
                this.config.Cloud.Users.logout(function(e){
                    if (e.success) {
                        if (_params.success) {
                            _params.success(null);
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
        _.extend(Collection.prototype, {});
        return Collection;
    }
};
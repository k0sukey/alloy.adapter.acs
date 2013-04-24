function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createScrollView({
        bottom: 0,
        height: 44,
        backgroundColor: "#333",
        contentWidth: "auto",
        contentHeight: 44,
        layout: "horizontal",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var services = {
        acls: [],
        chats: [],
        checkins: [],
        clients: [],
        objects: [],
        emails: [],
        events: [],
        files: [],
        friends: [],
        keyvalues: [],
        likes: [],
        messages: [],
        collections: [],
        photos: [],
        places: [],
        posts: [],
        pushnotifications: [],
        reviews: [],
        socialintegrations: [],
        statuses: [],
        users: [ "create", "remove", "login", "logout", "query", "reset", "search", "show", "me", "update" ]
    };
    var current;
    $.on("show", function(e) {
        var service = services[e.service];
        _.each(service, function(_item) {
            var tab = Alloy.createController("tab", {
                title: _item
            });
            $.container.add(tab.getView());
            tab.on("click", function(e) {
                var children;
                if (current) {
                    children = current.getView().getChildren();
                    children[0].applyProperties({
                        color: "#fff"
                    });
                    children[1].applyProperties({
                        color: "#fff"
                    });
                }
                current = this;
                children = this.getView().getChildren();
                children[0].applyProperties({
                    color: "#00bfff"
                });
                children[1].applyProperties({
                    color: "#00bfff"
                });
                $.trigger("click", e);
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
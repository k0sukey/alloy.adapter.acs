function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId96 = Ti.UI.createTableView({
        backgroundColor: "#fff",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "__alloyId96"
    });
    $.__views.container.add($.__views.__alloyId96);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId98"
    });
    $.__views.execute = Ti.UI.createButton({
        right: 10,
        left: 10,
        height: 44,
        title: "logout",
        id: "execute"
    });
    $.__views.__alloyId98.add($.__views.execute);
    $.__views.__alloyId96.headerView = $.__views.__alloyId98;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.execute.addEventListener("click", function() {
        var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
            message: "--- response ----------\n\nuser/logout execute"
        });
        $.container.add(message.getView());
        message.on("click", function() {
            $.container.remove(message.getView());
        });
        var users = Alloy.createModel("Users");
        users.logout({
            success: function() {
                message.trigger("add", {
                    message: "success"
                });
            },
            error: function(model, response) {
                message.trigger("add", {
                    message: "error: " + response
                });
            }
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
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
    $.__views.__alloyId98 = Ti.UI.createTableView({
        backgroundColor: "#fff",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "__alloyId98"
    });
    $.__views.container.add($.__views.__alloyId98);
    $.__views.__alloyId100 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId100"
    });
    $.__views.search = Ti.UI.createSearchBar({
        top: 0,
        id: "search",
        hintText: "user_id"
    });
    $.__views.__alloyId100.add($.__views.search);
    $.__views.execute = Ti.UI.createButton({
        top: 54,
        right: 10,
        left: 10,
        height: 44,
        title: "show",
        id: "execute"
    });
    $.__views.__alloyId100.add($.__views.execute);
    $.__views.__alloyId98.headerView = $.__views.__alloyId100;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.search.addEventListener("focus", function() {
        $.search.applyProperties({
            showCancel: true
        });
    });
    $.search.addEventListener("blur", function() {
        $.search.applyProperties({
            showCancel: false
        });
    });
    $.search.addEventListener("return", function() {
        $.search.blur();
    });
    $.search.addEventListener("cancel", function() {
        $.search.blur();
    });
    $.execute.addEventListener("click", function() {
        var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
            message: "--- response ----------\n\nuser/show execute"
        });
        $.container.add(message.getView());
        message.on("click", function() {
            $.container.remove(message.getView());
        });
        var users = Alloy.createModel("Users");
        users.show({
            user_id: $.search.getValue(),
            success: function(model) {
                message.trigger("add", {
                    message: "success: " + model.get("id")
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
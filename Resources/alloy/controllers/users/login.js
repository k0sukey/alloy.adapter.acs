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
    $.__views.__alloyId90 = Ti.UI.createTableViewSection({
        id: "__alloyId90"
    });
    var __alloyId91 = [];
    __alloyId91.push($.__views.__alloyId90);
    $.__views.__alloyId92 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        left: 0,
        width: 90,
        color: "#333",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        font: {
            fontSize: 14
        },
        touchEnabled: false,
        text: "email",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.login = Ti.UI.createTextField({
        left: 100,
        width: 190,
        color: "#262626",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16
        },
        id: "login",
        hintText: "or username"
    });
    $.__views.__alloyId92.add($.__views.login);
    $.__views.__alloyId94 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId94"
    });
    $.__views.__alloyId90.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        left: 0,
        width: 90,
        color: "#333",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        font: {
            fontSize: 14
        },
        touchEnabled: false,
        text: "password",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.password = Ti.UI.createTextField({
        left: 100,
        width: 190,
        color: "#262626",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16
        },
        id: "password"
    });
    $.__views.__alloyId94.add($.__views.password);
    $.__views.__alloyId87 = Ti.UI.createTableView({
        backgroundColor: "#fff",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId91,
        id: "__alloyId87"
    });
    $.__views.container.add($.__views.__alloyId87);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId89"
    });
    $.__views.execute = Ti.UI.createButton({
        right: 10,
        left: 10,
        height: 44,
        title: "login",
        id: "execute"
    });
    $.__views.__alloyId89.add($.__views.execute);
    $.__views.__alloyId87.headerView = $.__views.__alloyId89;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.execute.addEventListener("click", function() {
        var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
            message: "--- response ----------\n\nuser/login execute"
        });
        $.container.add(message.getView());
        message.on("click", function() {
            $.container.remove(message.getView());
        });
        var users = Alloy.createModel("Users");
        users.login({
            login: $.login.getValue(),
            password: $.password.getValue(),
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
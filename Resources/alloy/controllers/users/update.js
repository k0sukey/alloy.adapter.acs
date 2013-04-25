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
    $.__views.__alloyId86 = Ti.UI.createTableViewSection({
        headerTitle: "Required",
        id: "__alloyId86"
    });
    var __alloyId87 = [];
    __alloyId87.push($.__views.__alloyId86);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
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
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.email = Ti.UI.createTextField({
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
        id: "email",
        hintText: "or username"
    });
    $.__views.__alloyId88.add($.__views.email);
    $.__views.__alloyId90 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId90"
    });
    $.__views.__alloyId86.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
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
        text: "username",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.username = Ti.UI.createTextField({
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
        id: "username",
        hintText: "or email"
    });
    $.__views.__alloyId90.add($.__views.username);
    $.__views.__alloyId92 = Ti.UI.createTableViewSection({
        headerTitle: "Optional",
        id: "__alloyId92"
    });
    __alloyId87.push($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
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
        text: "firstname",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.firstname = Ti.UI.createTextField({
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
        id: "firstname"
    });
    $.__views.__alloyId93.add($.__views.firstname);
    $.__views.__alloyId95 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId95"
    });
    $.__views.__alloyId92.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
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
        text: "lastname",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.lastname = Ti.UI.createTextField({
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
        id: "lastname"
    });
    $.__views.__alloyId95.add($.__views.lastname);
    $.__views.__alloyId83 = Ti.UI.createTableView({
        backgroundColor: "#fff",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId87,
        id: "__alloyId83"
    });
    $.__views.container.add($.__views.__alloyId83);
    $.__views.__alloyId85 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId85"
    });
    $.__views.execute = Ti.UI.createButton({
        right: 10,
        left: 10,
        height: 44,
        title: "update",
        id: "execute"
    });
    $.__views.__alloyId85.add($.__views.execute);
    $.__views.__alloyId83.headerView = $.__views.__alloyId85;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var users = Alloy.createModel("Users");
    users.me({
        success: function(model) {
            $.email.applyProperties({
                value: model.get("email")
            });
            $.username.applyProperties({
                value: model.get("username")
            });
            $.firstname.applyProperties({
                value: model.get("first_name")
            });
            $.lastname.applyProperties({
                value: model.get("last_name")
            });
        },
        error: function() {}
    });
    $.execute.addEventListener("click", function() {
        var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
            message: "--- response ----------\n\nuser/update execute"
        });
        $.container.add(message.getView());
        message.on("click", function() {
            $.container.remove(message.getView());
        });
        users.me({
            success: function(model) {
                model.save({
                    email: $.email.getValue(),
                    username: $.username.getValue(),
                    first_name: $.firstname.getValue(),
                    last_name: $.lastname.getValue()
                }, {
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
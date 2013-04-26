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
    $.__views.__alloyId65 = Ti.UI.createTableViewSection({
        headerTitle: "Required",
        id: "__alloyId65"
    });
    var __alloyId66 = [];
    __alloyId66.push($.__views.__alloyId65);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
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
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
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
    $.__views.__alloyId67.add($.__views.email);
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId69"
    });
    $.__views.__alloyId65.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
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
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
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
    $.__views.__alloyId69.add($.__views.username);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId71"
    });
    $.__views.__alloyId65.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
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
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
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
    $.__views.__alloyId71.add($.__views.password);
    $.__views.__alloyId73 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId73"
    });
    $.__views.__alloyId65.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
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
        text: "confirm",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.confirm = Ti.UI.createTextField({
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
        id: "confirm"
    });
    $.__views.__alloyId73.add($.__views.confirm);
    $.__views.__alloyId75 = Ti.UI.createTableViewSection({
        headerTitle: "Optional",
        id: "__alloyId75"
    });
    __alloyId66.push($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
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
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
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
    $.__views.__alloyId76.add($.__views.firstname);
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        height: 44,
        backgroundColor: "#fcfcfc",
        borderColor: "#eee",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        touchEnabled: false,
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
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
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
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
    $.__views.__alloyId78.add($.__views.lastname);
    $.__views.__alloyId62 = Ti.UI.createTableView({
        backgroundColor: "#fff",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId66,
        id: "__alloyId62"
    });
    $.__views.container.add($.__views.__alloyId62);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId64"
    });
    $.__views.execute = Ti.UI.createButton({
        right: 10,
        left: 10,
        height: 44,
        title: "create",
        id: "execute"
    });
    $.__views.__alloyId64.add($.__views.execute);
    $.__views.__alloyId62.headerView = $.__views.__alloyId64;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.execute.addEventListener("click", function() {
        var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
            message: "--- response ----------\n\nuser/create execute"
        });
        $.container.add(message.getView());
        message.on("click", function() {
            $.container.remove(message.getView());
        });
        var users = Alloy.createModel("Users", {
            email: $.email.getValue(),
            username: $.username.getValue(),
            password: $.password.getValue(),
            password_confirmation: $.confirm.getValue(),
            first_name: $.firstname.getValue(),
            last_name: $.lastname.getValue()
        });
        users.save({}, {
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
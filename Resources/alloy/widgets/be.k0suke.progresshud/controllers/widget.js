function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "be.k0suke.progresshud/" + s : s.substring(0, index) + "/be.k0suke.progresshud/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("be.k0suke.progresshud");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.wrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "wrapper"
    });
    $.__views.wrapper && $.addTopLevelView($.__views.wrapper);
    $.__views.container = Ti.UI.createScrollView({
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        backgroundColor: "#333",
        borderRadius: 4,
        contentHeight: "auto",
        id: "container"
    });
    $.__views.wrapper.add($.__views.container);
    $.__views.message = Ti.UI.createLabel({
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        font: {
            fontSize: 14
        },
        touchEnabled: false,
        id: "message"
    });
    $.__views.container.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.message.applyProperties({
        text: args.message
    });
    $.container.addEventListener("click", function() {
        $.trigger("click");
    });
    $.on("add", function(e) {
        $.message.applyProperties({
            text: $.message.getText() + "\n" + e.message
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        width: 44,
        height: 44,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.icon = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: 6,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 20
        },
        touchEnabled: false,
        id: "icon",
        icon: "icon-cog",
        __parentSymbol: $.__views.container
    });
    $.__views.icon.setParent($.__views.container);
    $.__views.title = Ti.UI.createLabel({
        bottom: 2,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 10
        },
        touchEnabled: false,
        id: "title"
    });
    $.__views.container.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.applyProperties({
        text: args.title
    });
    $.container.addEventListener("click", function() {
        $.trigger("click", {
            title: args.title
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
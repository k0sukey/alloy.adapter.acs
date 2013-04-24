function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.modal = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "modal"
    });
    $.__views.modal && $.addTopLevelView($.__views.modal);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: 44,
        id: "header"
    });
    $.__views.modal.add($.__views.header);
    $.__views.close = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        left: 10,
        width: Ti.UI.SZIE,
        height: Ti.UI.SIZE,
        color: "#333",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        shadowColor: "#ddd",
        shadowOffset: {
            x: 0,
            y: -1
        },
        id: "close",
        icon: "icon-remove-circle",
        __parentSymbol: $.__views.header
    });
    $.__views.close.setParent($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SZIE,
        height: Ti.UI.SIZE,
        color: "#333",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        shadowColor: "#ddd",
        shadowOffset: {
            x: 0,
            y: -1
        },
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.image = Ti.UI.createImageView({
        right: 10,
        width: 26,
        height: 26,
        id: "image"
    });
    $.__views.header.add($.__views.image);
    $.__views.service = Ti.UI.createView({
        top: 44,
        bottom: 44,
        backgroundColor: "#fff",
        id: "service"
    });
    $.__views.modal.add($.__views.service);
    $.__views.tabgroup = Alloy.createController("tabgroup", {
        id: "tabgroup",
        __parentSymbol: $.__views.modal
    });
    $.__views.tabgroup.setParent($.__views.modal);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.applyProperties({
        text: args.title
    });
    $.image.applyProperties({
        image: "/images/" + args.service + ".png"
    });
    $.tabgroup.trigger("show", args);
    $.tabgroup.on("click", function(e) {
        var service = Alloy.createController(args.service + "/" + e.title);
        $.service.add(service.getView());
    });
    $.close.addEventListener("click", function() {
        $.modal.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
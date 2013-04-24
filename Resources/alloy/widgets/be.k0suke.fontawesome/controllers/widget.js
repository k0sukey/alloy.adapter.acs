function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "be.k0suke.fontawesome/" + s : s.substring(0, index) + "/be.k0suke.fontawesome/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("be.k0suke.fontawesome");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.Widget = Ti.UI.createLabel({
        id: "Widget"
    });
    $.__views.Widget && $.addTopLevelView($.__views.Widget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fontawesome = require(WPATH("IconicFont")).IconicFont({
        font: WPATH("FontAwesome")
    });
    args.text = fontawesome.icon(args.icon);
    args.font || (args.font = {});
    args.font.fontFamily = fontawesome.fontfamily();
    $.Widget.applyProperties(args);
    exports.setProperties = function(options) {
        options.icon && (options.text = fontawesome.icon(options.icon));
        $.Widget.applyProperties(options);
    };
    exports.getProperties = function(option) {
        return $.Widget[option];
    };
    [ "add", "addEventListener", "animate", "applyProperties", "convertPointToView", "fireEvent", "hide", "remove", "removeEventListener", "show", "toImage" ].forEach(function(func) {
        exports[func] = $.Widget[func];
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        backgroundColor: "#fff",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var message = Alloy.createWidget("be.k0suke.progresshud", "widget", {
        message: "--- response ----------\n\nuser/login execute"
    });
    $.container.add(message.getView());
    message.on("click", function() {
        $.container.remove(message.getView());
    });
    var users = Alloy.createModel("Users");
    users.me({
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
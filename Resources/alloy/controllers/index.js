function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: 44,
        backgroundColor: "#fff",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontWeight: "bold"
        },
        shadowColor: "#ddd",
        shadowOffset: {
            x: 0,
            y: -1
        },
        text: "alloy.adapter.acs",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.acls = Ti.UI.createTableViewRow({
        height: 46,
        id: "acls"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.acls);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/acls.png",
        id: "__alloyId2"
    });
    $.__views.acls.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Access Control Lists",
        id: "__alloyId3"
    });
    $.__views.acls.add($.__views.__alloyId3);
    $.__views.chats = Ti.UI.createTableViewRow({
        height: 46,
        id: "chats"
    });
    __alloyId1.push($.__views.chats);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/chats.png",
        id: "__alloyId4"
    });
    $.__views.chats.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Chats",
        id: "__alloyId5"
    });
    $.__views.chats.add($.__views.__alloyId5);
    $.__views.checkins = Ti.UI.createTableViewRow({
        height: 46,
        id: "checkins"
    });
    __alloyId1.push($.__views.checkins);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/checkins.png",
        id: "__alloyId6"
    });
    $.__views.checkins.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Checkins",
        id: "__alloyId7"
    });
    $.__views.checkins.add($.__views.__alloyId7);
    $.__views.clients = Ti.UI.createTableViewRow({
        height: 46,
        id: "clients"
    });
    __alloyId1.push($.__views.clients);
    $.__views.__alloyId8 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/clients.png",
        id: "__alloyId8"
    });
    $.__views.clients.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Clients",
        id: "__alloyId9"
    });
    $.__views.clients.add($.__views.__alloyId9);
    $.__views.objects = Ti.UI.createTableViewRow({
        height: 46,
        id: "objects"
    });
    __alloyId1.push($.__views.objects);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/objects.png",
        id: "__alloyId10"
    });
    $.__views.objects.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Custom Objects",
        id: "__alloyId11"
    });
    $.__views.objects.add($.__views.__alloyId11);
    $.__views.emails = Ti.UI.createTableViewRow({
        height: 46,
        id: "emails"
    });
    __alloyId1.push($.__views.emails);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/emails.png",
        id: "__alloyId12"
    });
    $.__views.emails.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Emails",
        id: "__alloyId13"
    });
    $.__views.emails.add($.__views.__alloyId13);
    $.__views.events = Ti.UI.createTableViewRow({
        height: 46,
        id: "events"
    });
    __alloyId1.push($.__views.events);
    $.__views.__alloyId14 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/events.png",
        id: "__alloyId14"
    });
    $.__views.events.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Events",
        id: "__alloyId15"
    });
    $.__views.events.add($.__views.__alloyId15);
    $.__views.files = Ti.UI.createTableViewRow({
        height: 46,
        id: "files"
    });
    __alloyId1.push($.__views.files);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/files.png",
        id: "__alloyId16"
    });
    $.__views.files.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Files",
        id: "__alloyId17"
    });
    $.__views.files.add($.__views.__alloyId17);
    $.__views.friends = Ti.UI.createTableViewRow({
        height: 46,
        id: "friends"
    });
    __alloyId1.push($.__views.friends);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/friends.png",
        id: "__alloyId18"
    });
    $.__views.friends.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Friends",
        id: "__alloyId19"
    });
    $.__views.friends.add($.__views.__alloyId19);
    $.__views.keyvalues = Ti.UI.createTableViewRow({
        height: 46,
        id: "keyvalues"
    });
    __alloyId1.push($.__views.keyvalues);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/keyvalues.png",
        id: "__alloyId20"
    });
    $.__views.keyvalues.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Key Values",
        id: "__alloyId21"
    });
    $.__views.keyvalues.add($.__views.__alloyId21);
    $.__views.likes = Ti.UI.createTableViewRow({
        height: 46,
        id: "likes"
    });
    __alloyId1.push($.__views.likes);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/likes.png",
        id: "__alloyId22"
    });
    $.__views.likes.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Likes",
        id: "__alloyId23"
    });
    $.__views.likes.add($.__views.__alloyId23);
    $.__views.messages = Ti.UI.createTableViewRow({
        height: 46,
        id: "messages"
    });
    __alloyId1.push($.__views.messages);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/messages.png",
        id: "__alloyId24"
    });
    $.__views.messages.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Messages",
        id: "__alloyId25"
    });
    $.__views.messages.add($.__views.__alloyId25);
    $.__views.collections = Ti.UI.createTableViewRow({
        height: 46,
        id: "collections"
    });
    __alloyId1.push($.__views.collections);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/collections.png",
        id: "__alloyId26"
    });
    $.__views.collections.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Photo Collections",
        id: "__alloyId27"
    });
    $.__views.collections.add($.__views.__alloyId27);
    $.__views.photos = Ti.UI.createTableViewRow({
        height: 46,
        id: "photos"
    });
    __alloyId1.push($.__views.photos);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/photos.png",
        id: "__alloyId28"
    });
    $.__views.photos.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Photos",
        id: "__alloyId29"
    });
    $.__views.photos.add($.__views.__alloyId29);
    $.__views.places = Ti.UI.createTableViewRow({
        height: 46,
        id: "places"
    });
    __alloyId1.push($.__views.places);
    $.__views.__alloyId30 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/places.png",
        id: "__alloyId30"
    });
    $.__views.places.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Places",
        id: "__alloyId31"
    });
    $.__views.places.add($.__views.__alloyId31);
    $.__views.posts = Ti.UI.createTableViewRow({
        height: 46,
        id: "posts"
    });
    __alloyId1.push($.__views.posts);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/posts.png",
        id: "__alloyId32"
    });
    $.__views.posts.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Posts",
        id: "__alloyId33"
    });
    $.__views.posts.add($.__views.__alloyId33);
    $.__views.pushnotifications = Ti.UI.createTableViewRow({
        height: 46,
        id: "pushnotifications"
    });
    __alloyId1.push($.__views.pushnotifications);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/pushnotifications.png",
        id: "__alloyId34"
    });
    $.__views.pushnotifications.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Push Notifications",
        id: "__alloyId35"
    });
    $.__views.pushnotifications.add($.__views.__alloyId35);
    $.__views.reviews = Ti.UI.createTableViewRow({
        height: 46,
        id: "reviews"
    });
    __alloyId1.push($.__views.reviews);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/reviews.png",
        id: "__alloyId36"
    });
    $.__views.reviews.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Reviews",
        id: "__alloyId37"
    });
    $.__views.reviews.add($.__views.__alloyId37);
    $.__views.socialintegrations = Ti.UI.createTableViewRow({
        height: 46,
        id: "socialintegrations"
    });
    __alloyId1.push($.__views.socialintegrations);
    $.__views.__alloyId38 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/socialintegrations.png",
        id: "__alloyId38"
    });
    $.__views.socialintegrations.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Social Integrations",
        id: "__alloyId39"
    });
    $.__views.socialintegrations.add($.__views.__alloyId39);
    $.__views.statuses = Ti.UI.createTableViewRow({
        height: 46,
        id: "statuses"
    });
    __alloyId1.push($.__views.statuses);
    $.__views.__alloyId40 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/statuses.png",
        id: "__alloyId40"
    });
    $.__views.statuses.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Statuses",
        id: "__alloyId41"
    });
    $.__views.statuses.add($.__views.__alloyId41);
    $.__views.users = Ti.UI.createTableViewRow({
        height: 46,
        id: "users"
    });
    __alloyId1.push($.__views.users);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        left: 10,
        width: 26,
        height: 26,
        touchEnabled: false,
        image: "/images/users.png",
        id: "__alloyId42"
    });
    $.__views.users.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        left: 46,
        right: 10,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        text: "Users",
        id: "__alloyId43"
    });
    $.__views.users.add($.__views.__alloyId43);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "#fff",
        data: __alloyId1,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table.addEventListener("click", function(e) {
        Alloy.createController("modal", {
            service: e.rowData.id,
            title: e.source.getChildren()[1].getText()
        }).getView().open({
            modal: true
        });
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
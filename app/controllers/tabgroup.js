var args = arguments[0] || {};

var services = {
	acls: [],
	chats: [],
	checkins: [],
	clients: [],
	objects: [ 'create', 'remove', 'query', 'show', 'update' ],
	emails: [],
	events: [],
	files: [],
	friends: [],
	keyvalues: [],
	likes: [],
	messages: [],
	collections: [],
	photos: [],
	places: [],
	posts: [],
	pushnotifications: [],
	reviews: [],
	socialintegrations: [],
	statuses: [],
	users: [ 'create', 'remove', 'login', 'logout', 'query', 'reset', 'search', 'show', 'me', 'update' ]
};

var current;

$.on('show', function(e){
	var service = services[e.service];

	_.each(service, function(_item){
		var tab = Alloy.createController('tab', {
			title: _item
		});
		$.container.add(tab.getView());

		tab.on('click', function(e){
			var children;

			if (current) {
				children = current.getView().getChildren();
				children[0].applyProperties({
					color: '#fff'
				});
				children[1].applyProperties({
					color: '#fff'
				});
			}
			current = this;

			children = this.getView().getChildren();
			children[0].applyProperties({
				color: '#00bfff'
			});
			children[1].applyProperties({
				color: '#00bfff'
			});

			$.trigger('click', e);
		});
	});
});

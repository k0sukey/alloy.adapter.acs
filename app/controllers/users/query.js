var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
	message: '--- response ----------\n\nuser/query execute'
});
$.container.add(message.getView());

message.on('click', function(){
	$.container.remove(message.getView());
});

var users = Alloy.createCollection('Users');
users.fetch({
	data: {
		page: 1,
		per_page: 10
	},
	success: function(collection, response){
		message.trigger('add', {
			message: 'success: '
		});

		collection.each(function(user, index){
			message.trigger('add', {
				message: ' ' + index + ': ' + user.get('id')
			});
		});
	},
	error: function(collection, response){
		message.trigger('add', {
			message: 'error: ' + response
		});
	}
});
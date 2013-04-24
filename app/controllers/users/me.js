var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
	message: '--- response ----------\n\nuser/login execute'
});
$.container.add(message.getView());

message.on('click', function(){
	$.container.remove(message.getView());
});

var users = Alloy.createModel('Users');
users.me({
	success: function(model){
		message.trigger('add', {
			message: 'success: ' + model.get('id')
		});
	},
	error: function(model, response){
		message.trigger('add', {
			message: 'error: ' + response
		});
	}
});

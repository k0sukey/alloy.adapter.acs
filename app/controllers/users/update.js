var users = Alloy.createModel('Users');
users.me({
	success: function(model){
		$.email.applyProperties({
			value: model.get('email')
		});
		$.username.applyProperties({
			value: model.get('username')
		});
		$.firstname.applyProperties({
			value: model.get('first_name')
		});
		$.lastname.applyProperties({
			value: model.get('last_name')
		});
	},
	error: function(model, response){
		// error proc
	}
});

$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nuser/update execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	users.me({
		success: function(model){
			model.save({
				email: $.email.getValue(),
				username: $.username.getValue(),
				first_name: $.firstname.getValue(),
				last_name: $.lastname.getValue()
			}, {
				success: function(){
					message.trigger('add', {
						message: 'success'
					});
				},
				error: function(model, response){
					message.trigger('add', {
						message: 'error: ' + response
					});
				}
			});
		},
		error: function(model, response){
			message.trigger('add', {
				message: 'error: ' + response
			});
		}
	});
});
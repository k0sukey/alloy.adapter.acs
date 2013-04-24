$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nuser/create execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var users = Alloy.createModel('Users', {
		email: $.email.getValue(),
		username: $.username.getValue(),
		password: $.password.getValue(),
		password_confirmation: $.confirm.getValue(),
		firstname: $.firstname.getValue(),
		lastname: $.lastname.getValue()
	});
	users.save({}, {
		success: function(model, response){
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
});
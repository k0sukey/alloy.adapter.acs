$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nuser/delete execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var users = Alloy.createModel('Users');
	users.me({
		success: function(model){
			message.trigger('add', {
				message: 'user/showMe success'
			});

			model.destroy({
				success: function(model, response){
					console.log(model);
					console.log(response);
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
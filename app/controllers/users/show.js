$.search.addEventListener('focus', function(){
	$.search.applyProperties({
		showCancel: true
	});
});

$.search.addEventListener('blur', function(){
	$.search.applyProperties({
		showCancel: false
	});
});

$.search.addEventListener('return', function(){
	$.search.blur();
});

$.search.addEventListener('cancel', function(){
	$.search.blur();
});

$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nuser/show execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var users = Alloy.createModel('Users');
	users.show({
		user_id: $.search.getValue(),
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
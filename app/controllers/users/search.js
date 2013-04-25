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

	var users = Alloy.createCollection('Users');
	users.fetch({
		data: {
			q: $.search.getValue()
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
});
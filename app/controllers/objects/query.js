$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nobjects/query execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var objects = Alloy.createCollection('Objects');
	objects.setClassname($.classname.getValue());
	objects.fetch({
		data: {
			page: 1,
			per_page: 10
		},
		success: function(collection, response){
			message.trigger('add', {
				message: 'success: '
			});

			collection.each(function(object, index){
				message.trigger('add', {
					message: ' ' + index + ': ' + object.get('id')
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
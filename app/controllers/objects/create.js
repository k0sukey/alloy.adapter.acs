$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nobjects/create execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var objects = Alloy.createModel('Objects');
	objects.setClassname($.classname.getValue());
	objects.save({
		field0: $.field0.getValue(),
		field1: $.field1.getValue(),
		field2: $.field2.getValue(),
		field3: $.field3.getValue(),
		field4: $.field4.getValue()
	}, {
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
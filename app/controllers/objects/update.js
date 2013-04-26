$.show.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nobjects/show execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var objects = Alloy.createModel('Objects');
	objects.setClassname($.classname.getValue());
	objects.show({
		id: $.search.getValue(),
		success: function(model, response){
			message.trigger('add', {
				message: 'success: ' + model.get('id')
			});

			$.field0.applyProperties({
				value: model.get('field0')
			});
			$.field1.applyProperties({
				value: model.get('field1')
			});
			$.field2.applyProperties({
				value: model.get('field2')
			});
			$.field3.applyProperties({
				value: model.get('field3')
			});
			$.field4.applyProperties({
				value: model.get('field4')
			});
		},
		error: function(model, response){
			message.trigger('add', {
				message: 'error: ' + response
			});
		}
	});
});

$.execute.addEventListener('click', function(){
	var message = Alloy.createWidget('be.k0suke.progresshud', 'widget', {
		message: '--- response ----------\n\nobjects/update execute'
	});
	$.container.add(message.getView());

	message.on('click', function(){
		$.container.remove(message.getView());
	});

	var objects = Alloy.createModel('Objects');
	objects.setClassname($.classname.getValue());
	objects.show({
		id: $.search.getValue(),
		success: function(model, response){
			message.trigger('add', {
				message: 'success: ' + model.get('id')
			});

			model.save({
				classname: $.classname.getValue(),
				field0: $.field0.getValue(),
				field1: $.field1.getValue(),
				field2: $.field2.getValue(),
				field3: $.field3.getValue(),
				field4: $.field4.getValue()
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
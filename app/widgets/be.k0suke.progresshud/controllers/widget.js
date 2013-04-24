var args = arguments[0] || {};

$.message.applyProperties({
	text: args.message
});

$.container.addEventListener('click', function(){
	$.trigger('click');
});

$.on('add', function(e){
	$.message.applyProperties({
		text: $.message.getText() + '\n' + e.message
	});
});
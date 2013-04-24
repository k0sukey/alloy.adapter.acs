var args = arguments[0] || {};

$.title.applyProperties({
	text: args.title === 'remove' ? 'delete' : args.title
});

$.container.addEventListener('click', function(e){
	$.trigger('click', {
		title: args.title
	});
});
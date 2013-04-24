var args = arguments[0] || {};

$.title.applyProperties({
	text: args.title
});

$.container.addEventListener('click', function(e){
	$.trigger('click', {
		title: args.title
	});
});
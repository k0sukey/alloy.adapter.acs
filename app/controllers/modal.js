var args = arguments[0] || {};

$.title.applyProperties({
	text: args.title
});

$.image.applyProperties({
	image: '/images/' + args.service + '.png'
});

$.tabgroup.trigger('show', args);

$.tabgroup.on('click', function(e){
	var service = Alloy.createController(args.service + '/' + e.title);
	$.service.add(service.getView());
});

$.close.addEventListener('click', function(){
	$.modal.close();
});
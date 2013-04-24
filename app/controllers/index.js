$.table.addEventListener('click', function(e){
	Alloy.createController('modal', {
		service: e.rowData.id,
		title: e.source.getChildren()[1].getText()
	}).getView().open({
		modal: true
	});
});

$.index.open();
$.table.addEventListener('click', function(e){
	Alloy.createController('modal', {
		service: e.rowData.id,
		title: e.source.getChildren()[1].getText()
	}).getView().open({
		modal: true
	});
});

$.index.open();

var users = Alloy.createModel('Users');
if (users.authenticated()) {
	console.log('Authenticated');
} else {
	console.log('Unauthenticated');
}
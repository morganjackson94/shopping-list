//user inputs list item
function addItem() {
	var write = $('.item').val();
	var list = $('.list-container');
	var item = $('<li><button class="fa fa-minus-square-o"></button><span class="new-item">' + write + '</span><button class="fa fa-check-square-o"></button></li>');
	var newItem = $('.list');

	if (write.length === 0) {
		return false;
	}

	list.append(item);
	$(newItem).val('');

}

$(function() {
	var newItem = $('.list');

	newItem.on('keypress', function(e) {
        if (e.which == 13) {
            addItem();
        }
	});
});


	//user adds list item by pressing enter
	//user removes list item
	//user completes list item

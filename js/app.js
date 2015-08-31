//user inputs list item
function addItem() {
	var write = $('.item').val();
	var list = $('.list-container');
	var item = $('<li><button class="fa fa-minus-square-o"></button><span class="new-item">' + write + '</span><button class="fa fa-check-square-o"></button></li>');
	var newItem = $('.list');
	var placeholder = $('.placehold')

	if (write.length === 0) {
		return false;
	}

	placeholder.remove();
	list.append(item);
	$(newItem).val('');

}

function deleteItem() {
	$(newItem).remove();
}


$(function() {
	var newItem = $('.list');
	var minus = $('<button class="fa fa-minus-square-o">');
	var list = $('.list-container');


//user removes list item
	list.on('click', minus, deleteItem);

//user adds list item by pressing enter
	newItem.on('keypress', function (e) {
        if (e.which == 13) {
            addItem();
        }
	});
});




	
	
	//user completes list item

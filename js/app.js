//user inputs list item
var newItem = $('.item');

function addItem() {
	console.log("add item");
	var list = $('.list');
	var item = $('<li><button class="fa fa-minus-square-o"></button><span class="new-item">' + write + '</span><button class="fa fa-check-square-o"></button></li>');
	var placeholder = $('.placehold');

	if (write.length === 0) {
		return false;
	}

	placeholder.remove();
	list.append(item);
	$(newItem).val('');

}

function deleteItem() {
	$(this).remove();
}


$(function() {
	var newItem = $('.item');
	var minus = $('<button class="fa fa-minus-square-o">');
	var list = $('.list');


//user removes list item
	list.on('click', minus, deleteItem);

//user adds list item by pressing enter
	newItem.on('submit', function(e) {
		var write = $('.item').val();
    	e.preventDefault();
       	addItem();
    })
});


// jquery submit 

	
	
	//user completes list item

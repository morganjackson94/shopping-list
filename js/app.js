$(document).ready(function() {

	console.log('ready!');


	var form = $('form');
	var newItem = $('.textfield').val();


	//user inputs list item
	function addItem() {
		console.log("add item");

		var newListItem = $('<li><button class="fa fa-minus-square-o delete"></button><span class="new-item">' + newItem + '</span><button class="fa fa-check-square-o"></button></li>');


		if (newItem.length === 0) {
			console.log('empty text')
			return false;
		}

		$('.placehold').hide();
		$('ul.list').append(newListItem);
		$(newItem).val('');

	}

	//user removes list item
	$('ul.list').on('click', '.delete', function() {
		console.log(this);
		$(this).parent().remove();
	});

	//user removes list item
	// list.on('click', del, deleteItem);

	//user adds list item by pressing enter
		form.on('submit', function(e) {
			e.preventDefault();
			newItem = $('.textfield').val();
	    console.log(newItem);
	    addItem();
	  });

});





// jquery submit



	//user completes list item

$(document).ready(function() {

	
	var form = $('form');
	var newItem = $('.textfield').val();
	

	//user inputs list item
	function addItem() {
		console.log("add item");

		var newListItem = $('<li class="animated fadeInUp"><button class="fa fa-minus-square-o delete"></button><span class="new-item">' + newItem + '</span><button class="fa fa-check-square-o complete"></button></li>');


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
		alert("Are you sure you want to remove this item?");
		$(this).parent().remove();
	});

	$('ul.list').on('click', '.complete', function() {
		$(this).parent().fadeOut( "slow", function() {
			console.log(this);
		});
	});

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

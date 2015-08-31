//user inputs list item
function addItem() {
	var write = $('.item').val();
	var list = $('.list-container');
	var item = $('<li>
					<span></span>
					<button class="remove">
						<img src="http://www.clker.com/cliparts/0/7/e/a/12074327311562940906milker_X_icon.svg.hi.png" width="20px">
					</button>' + write + '<button class="check">
						<img src="http://www.clker.com/cliparts/u/e/E/I/2/i/dark-green-check-mark-hi.png" alt="check" width="25px">
					</button>
				</li>');
	var newItem = $('.list')

	if (write.length === 0) {
		return false;
	}

	list.append(item);
	$(newItem).val('');

}

$(function() {
	newItem.on('keypress', function (e) {
        if (e.which == 13) {
            addListItem();
        }
}

	//user adds list item by pressing enter
	//user removes list item
	//user completes list item

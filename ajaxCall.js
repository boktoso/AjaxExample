function ajaxCall() {

	if ($('#first').val() != '' && $('#first').val() == prevChoice) {
		return;
	}
	else {
		var optionChoice = $('#first').val();
	}

	$.ajax({
		url: "getAjax.php?first="+optionChoice,
		success: function(response) {
			var secondOptions = JSON.parse(response),
				select = "";
			for (var i=0,l=secondOptions.length;i<l;i++) {
				select += ("<option value='"+secondOptions[i].toLowerCase()+ "'>" + secondOptions[i].toUpperCase() + "</option>");
			}
			$('#second').html(select);
			prevChoice = optionChoice;
		}
	});
}

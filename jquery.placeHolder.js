// jQuery.placeHolder
//
// Adds fallback support for HTML5 placeholder attribute functionality in older browsers.
//
// Example: $('input, textarea').placeHolder();

$.fn.placeHolder = function() {

	var placeHolderAttribute = "placeholder"; 
	
	// Check for browser native support
	var test = document.createElement('input'); 
	var hasNativeSupport = placeHolderAttribute in test;

	if(hasNativeSupport) {
		return;
	}

	var processField = function(inputBox) {
		
		var tagName = $(inputBox).get(0).tagName.toLowerCase();
		var labelTxt = $(inputBox).attr(placeHolderAttribute);
		
		var isValidTag = tagName == "input" || tagName == "textarea";
		var isValidField = isValidTag && labelTxt;

		if(!isValidField) {
			return; 
		}

		var addLabel = function(field) {
			$(field).val(labelTxt);
			$(field).addClass(placeHolderAttribute);
		};

		var removeLabel = function(field) {
			$(field).val('');
			$(field).removeClass(placeHolderAttribute);
		};

		var updateLabel = function(field) {
			
			// If the value matches the label, 
			if ($(field).val() === labelTxt) {
				removeLabel(field);
			}
			
			// If the value is empty, add label
			else if ($(field).val() === '') {
				addLabel(field);
			}
		};

		$(inputBox).focus(function() { updateLabel(this); });
		$(inputBox).blur(function() { updateLabel(this); });

		// Init the label now
		addLabel(inputBox);
	};

	$(this).each(function() {
		processField(this);		
	});

	return $(this);
};

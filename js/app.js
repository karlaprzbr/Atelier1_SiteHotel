 
//app var
var app = {};
 
(function($){
	"use strict";


/*************************
  Predefined Variables
*************************/ 

	var $window = $(window),
	$document = $(document);

// Segmenter ses différentes app en fonction de leur type d'intervention sur le DOM

	app.event = function () {
		$('#burger').click(function() {
			$('#nav').show();
		});
		$('#cross').click(function() {
			$('#nav').hide();
		});
		
	}

	//Document ready functions
	$document.ready(function () {
		app.event();
	});

})(jQuery);
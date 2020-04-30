$("#ex5").slider();

// Without JQuery
var slider = new Slider('#ex5');

$("#destroyEx5Slider").click(function() {

	// With JQuery
	$("#ex5").slider('destroy');

	// Without JQuery
	slider.destroy();
});
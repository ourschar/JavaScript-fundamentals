$(function() { //<-- this is a shortcut of $(document).ready(function(){
	//start up code goes here
	//alert("this works!");

	//$("#title").text("Yay, I can now get at the H1 immediately!");  <---changed the text instead of using .innerHTML
	//$("#first").html("<h2>Great quotes</h2>");  <--replacing text & also adding html by adding an h2 (not just the text).

	//append and prepend work INSIDE the given selection. 
	$("#first").prepend("<h2>Great quotes</h2>"); //<---doesn't replace, but adds to it ABOVE the selector (id/classname/element) itself. 
	$("#first").append("<h3>... for you to ponder ... </h3"); // <---adds to it AFTER the selector (but inside)
	//before, after, insertBefore, insertAfter work OUTSIDE the given selection.

	//$("#myAnchor").attr("href", "http://channel9.msdn.com"); <--changing the attribute (the href) to a different site.
	$("#title").addClass("standout"); //<--adds the name of a class (has to be referenced in the css file though).
});

/*
$(".importantText")  //these create a jQuery object by classname and does the changes to all of them.
$("#myFirstParagraph")
$("p").fadeOut(); 

jQuery("<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"/></div>") //passing a string of items into jQ and it will add to the DOM. (I think)

$.myCustomMethod = function() {alert("hi");};

$.listBox = {
	show: function() { },
	hide: function() { },
	position: function() { },
	initiate: function() { }
};
*/


$(function() {
  //var version = "1.2";
  //alert(window.version); //using window is so that we're attaching the variable to jQuery instead, and not the Global. (?)

 /*
 $('#clickMe').click(function() {
    $('#main').append('You should only see this if you click the plus!');

 });
 */

 $('#main').append("<img src='plus-8.png' alt= 'Click me to see the paragraph' id='clickMe' />")

 $('#clickMe').toggle(function() {      //the first instance of when they toggle
    $('#message').show('fast');
    $('#clickMe').attr('src', 'minus-8.png');

 }, function() {   //the second instance of when they toggle
  $('#message').hide('slow');
  $('#clickMe').attr('src', 'plus-8.png');
 });

  $('#message').hide();   //this shows up if their JS is turned OFF. Otherwise, JS will work and HIDE the message. 

});

//var version = "1.2"; This is bad because it's global (not inside your function), so anyone who uses "version" might overwrite stuff.

/*
var AETRIS = {};  //creating a global object 
AETRIS.version = "1.2";

//var planet = {   This is bad because it pollutes the global namespace. However, doing AETRIS.PLANET = { does not because it limits it to 1.
  AETRIS.planet = {
  id: 34,
  name: "Intempstesta Nox"
}
*/
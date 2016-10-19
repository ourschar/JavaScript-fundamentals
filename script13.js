/*window.onload = function() {  //attaching an annonymous function to window.onload so that the webpage finishes first. Then it can do the functions.
  //var clickMeButton = document.getElementById('clickMe');
  //clickMeButton.onclick = runTheExample;    //these 2 lines do the same as the below line. 

  document.getElementById('clickMe').onclick = runTheExample;
}
*/

function runTheExample() {
  alert('running the example');
}


/*
function runTheExample() {

  var myElement = document.getElementById("second");

  var myNodeName = myElement.nodeName;
  //alert (myNodeName);

  if (myElement !== null) 
  {
   alert(myElement.innerHTML);
  }
  */

/*
  document.getElementById("second").innerHTML = "See how I set the text here?";  //this inserted NEW text to overwrite the html text.
*/

/*
var listOfParagraphs = document.getElementsByTagName("p");
//alert(listOfParagraphs.length);

var secondParagraph = listOfParagraphs[1];
alert(secondParagraph.innerHTML);
*/

/*
myElement = document.getElementById("second");
alert(myElement.parentNode.nodeName);


myElement.childNodes[0];   //examples of different things you can access (might need to do .length first to see how many there are)
myElement.firstChild;
myElement.lastChild;
myElement.nextSibling;
myElement.previousSibling;
*/

//var anchor = document.getElementById("myAnchor");    //this gets the attribute(the destination of the href)
//var anchorDestination = anchor.href;
  //alert(anchorDestination);

  //anchor.href = "http://www.learnvisualstudio.net"; //this sets the attribute(of where the href goes)

  //anchor.setAttribute("href", "http://www.learnvisualstudios.net");  <---These 2 are for older browsers who can't read the prior get/set directions.
  //anchor.getAttribute("href");



}


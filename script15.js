$(function() {
 
  // By id
  //$("#first").addClass("highlight");

  // By element/tag
  //$("p").addClass("highlight");

  // By class
  //$(".chosen").addClass("highlight");

  // By combination
  //$("#first, .chosen").addClass("highlight");

  // Contains
  //$('li:contains("Three")').addClass("highlight");

  $('li:even').addClass('highlight');  //this is zero-based, so the first item is considered 0 (which is why the odd really shows up)

  // next, previous
  //$('li:contains("Three")').next().addClass("highlight");  //chooses the next DOM element. 1-based (not 0).

  //$('li:contains("Three")').prev().addClass("highlight");

  // siblings, parent
  //$('li:contains("Three")').siblings().addClass("highlight"); //chooses the same tags inside it
  //$('li:contains("Three")').parent().addClass("highlight"); //the <ul> is the parent, so it selects all of it

  // child
  //$('li:nth-child(1)').addClass('highlight');  //looks through ALL <li> & takes the 1st item of each. 

  //attribute
  //$('p[name="mySecondPara"]').addClass('highlight'); 

  //$('p[name!="mySecondPara"]').addClass('highlight'); //gives everything except (does NOT equal) the attribute (name)

  //$('p').not('[name]').addClass('highlight');  //exact same as above, but with the "not" method.

   //$(':header').addClass('highlight');  //jquery-specific selector syntax. The :header finds all of the headers.
   $('p:empty').text("You seemed lonely, so here is some text"); //:empty is another specific one. 

});

//FOR MORE, http://api.jquery.com  -Selectors. 





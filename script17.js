$(function() {
  $("#datepicker").datepicker();
 var tabs = $( "#tabs" ).tabs();
var ul = tabs.find( "ul" );
$( "<li><a href='16-jqueryEvents.html'>Click-a-Bob</a></li>" ).appendTo( ul );
tabs.tabs( "refresh" );

});

/*
  ({
  onSelect: function(dateText, inst) {
      $('#title').text("You picked: " + dateText);
    }
  });
  */
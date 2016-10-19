$(function() {
 
  $('#clickme').click(function() {

    /*
    $.getJSON('data19.json', function(data) {   //.getJSON is a jquery retrieval method. It will send our "call back function (function(data))" the data it retrieves. data(the argument in the function) is a js object

      var items = [];

      $.each(data, function(key, val) {  //he lost me here. Is 'data' a made up variable or a jquery term? What is a key/val?

        items.push('<li id="' + key + '">' + val + '</li>'); //why is 'key' being added to empty quotes first?

      });

      $('<ul/>', {    //adding a new selector (ul) for html instead of using an exisiting css selector. This is a new object literal.
        'class': 'interest-list',
        html: items.join('')
      }).appendTo('body');

    });
    This above method is bad because if you don't type in the file name correctly (data19.json), there will be no error msg & nothing will work. Using ajax is better.
    */

    $.ajax({
      url: 'data19.json',
      dataType: 'json',
      success: function(data) {   //when a success happens, this is the function that's called (which will pass in the data).

        var items = [];

        $.each(data, function(key, val) {  //he lost me here. Is 'data' a made up variable or a jquery term? What is a key/val?

          items.push('<li id="' + key + '">' + val + '</li>'); //why is 'key' being added to empty quotes first?

        });

        $('<ul/>', {    //adding a new selector (ul) for html instead of using an exisiting css selector. This is a new object literal.
          'class': 'interest-list',
          html: items.join('')
        }).appendTo('body');

      },
      statusCode: {
        404: function() {
          alert('There was a problem with the server. Try again soon!');
        }
      }
    });

   });

  }); 

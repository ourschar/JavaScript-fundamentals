$(function() {

  $('#success').hide();
  $('#startover').addClass('hoverOut');
  var score = 0;

  $('#bobhead').click(function() {
    score++;
    $('#score').text(score);
    $('#success').show('slow').fadeOut(2000);

  });

  $('#startover').hover(function() {   //this hover event handler takes 2 annonomous functions (hover in & hover out)

    score = 0;
    $('#score').text(score);
    $('#startover').addClass('hoverIn').removeClass('hoverOut');
  }, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');

  });

});
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.navbar-default').css({'padding' : '40px'});
  }
  else{
    $('.navbar-default').css({'padding' : '50px'});
  }
});


/* jQuery toggle +/- icons */
$(document).ready(function(){
  $('.topic').click(function(){
    $(this).toggleClass('active');
  });
});

   

/* Jquery to toggle menus */
 $('.toggle').click(function(e) {
     e.preventDefault();

   var $active = $(active);

    if ($active.next().hasClass('show')) {
        $active.next().removeClass('show');
        $active.next().slideUp(350);
    } else {
       $active.parent().active().find('li .inner').removeClass('show');
       $active.parent().parent().find('li .inner').slideUp(350);

        $active.next().toggleClass('show');
        $active.next().slideToggle(350);
      
    }


  
  
  });

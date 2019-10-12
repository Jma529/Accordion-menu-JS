/* Version one -jQuery */
$(document).ready(function(){
  $('.topic').click(function(){
    $(this).toggleClass('active');
  });
});

   


 $('.toggle').click(function(e) {
     e.preventDefault();

   var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
       $this.parent().parent().find('li .inner').removeClass('show');
       $this.parent().parent().find('li .inner').slideUp(350);
      
   
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
      
    }


  
  
  });



/* Version two- Vanilla Javascript */


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if(content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//      content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }

/* Version 3 */

// $(function() {
//     var coll = document.getElementsByClassName("accordion");
  
//     //setting buttons of class 'accordion' to extend on click
//     for (i = 0; i < coll.length; i++) {
//       coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//       });
//     }
//   });
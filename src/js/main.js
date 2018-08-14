jQuery(document).ready(function($){
    $('.icon-menu').click(function(event){
      $('.main-nav__navigation').toggleClass('show');
    });
  });

// $(window).resize(function() {
//   if ( $(window).width() > 768 ) {
//    $(".articles__thirdBlock").appendTo(".articles__secondBlock");
//   }
// });

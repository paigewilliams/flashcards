 $(document).ready(function() {
   $(".well").click(function(){
     $(this).children("p").slideToggle();
     $(this).toggleClass("flashcard-clicked");
   });

  // $(".click").click(function() {
  //   $("#js-hide").slideToggle();
  //   $("#js-show").slideToggle();
  // });
  //
  // $(".click2").click(function() {
  //   $("#op-hide").slideToggle();
  //   $("#op-show").slideToggle();
  // });
  //
  // $(".click3").click(function() {
  //   $("#vr-hide").slideToggle();
  //   $("#vr-show").slideToggle();
  // });
 });

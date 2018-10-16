 $(document).ready(function() {
//   $("h3").click(function() {
//     $(this).removeClass();
//     $(this).addClass("p#show");
//     $(this).slideToggle();
//
  // $("h3").click(function() {
  //   $(this).sibling("p").removeClass();
  //   $(this).sibling().addClass('show');
  //   $(this).addClass('hide');
  // });

  $("#js-click").click(function() {
    $("#js-hide").removeClass('hide');
    $("#js-hide").addClass('show');
    $("#js-click").css("color","red");
  });

 });

$(document).ready(function () {
      $("#ticket-contents").show();
   $("#title-contents").hide();

  // $("#ticket-contents,#title-contents").click(function () {
  //         $("#ticket-contents").fadeToggle(1000);
  //       $("#title-contents").fadeToggle(1000);
    
     $("#ticket-contents, #title-contents").click(function () {
          $("#ticket-contents").fadeToggle(1000);
        $("#title-contents").fadeToggle(1000);
    
  });
});


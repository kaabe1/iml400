// var xPos = randPosX();
// var yPos = randPosY();

$(document).ready(function () {
  $("#pog").hide();

  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  $("#light-button").click(function () {
    on();
  });

  $("#overlay").click(function () {
    off();
  });

    $("#serve-button").click(function () {
  $("#pog").toggle();
       $("#pog").draggable();

    });

//   function randPosX() {
//     return Math.floor(Math.random() * 300);
//   } //end x
//   function randPosY() {
//     return Math.floor(Math.random() * 600);
//   } //end y

//   $("#serve-button").click(function () {
//     $("#juice-area").append(
//       '<img src="https://cdn.glitch.global/615727b4-cf13-4386-bc45-98287f32854a/POGGG.png?v=1674691442402"  style="width:250px; position:fixed; z-index: 10; top:' +
//         xPos +
//         "px; left:" +
//         yPos +
//         'px;" />'
//     );
//   });
});

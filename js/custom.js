$(window).bind("load", function () {
  var typed_strings = ["Web Developer.", "Tester.", "Programmer."];
  var typed = new Typed(".text-slider", {
    strings: typed_strings,
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30,
    startDelay: 500,
  });
});

function drawC() {
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  //chinese characters - taken from the unicode charset
  var chinese = "0123456789";
  //converting the string into an array of single characters
  chinese = chinese.split("");

  var font_size = 15;
  var columns = c.width / font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for (var x = 0; x < columns; x++) drops[x] = 1;

  //drawing the characters
  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#6B3792"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
      //a random chinese character to print
      var text = chinese[Math.floor(Math.random() * chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 33);
  console.log(c);

  //document.getElementById('binary').style.background = "url(" + c.toDataURL() + ")";
}

drawC();

var globalSkill = false;

var waypoint = new Waypoint({
  element: document.getElementById("sboxed"),
  handler: function (direction) {
    if (globalSkill === false) {
      $(".progress").addClass("ani");
      globalSkill = true;
      //console.log('hello')
    }
  },
  offset: "100%",
});

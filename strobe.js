var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases

  // function changeToggle () {
  //   if (onOrOff) {
  //     led.stop();
  //     onOrOff = false;
  //   } else {
  //     led.strobe(100);
  //     onOrOff = true;
  //   }
  // }
  let speed = 1000;
  speed = setInterval(() => speed -500, 1000);

  function startLED(speed){
    led.strobe(speed);
  }

  function stopLED() {
    led.stop();
  }

  // for (var i = 0; i < 2; i++) {
    setTimeout(startLED, 1000);

    setTimeout(stopLED, 2000);

    setTimeout(startLED, 3000);

    setTimeout(stopLED, 4000);

    setTimeout(startLED, 5000);

    setTimeout(stopLED, 6000);

    setTimeout(startLED, 7000);

    setTimeout(stopLED, 8000);

    setTimeout(startLED, 9000);

    setTimeout(stopLED, 10000);
    
    
  // }


});
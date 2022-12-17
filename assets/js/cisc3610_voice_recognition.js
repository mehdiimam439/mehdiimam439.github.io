// JavaScript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const helpLine = document.getElementById("help");
const status = document.getElementById("status");
let color = "black";
let size = 25;

function drawCircle() {
    clearCanvas();
    ctx.beginPath();
    ctx.arc(300, 300, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

drawCircle();
helpLine.style.display = 'none';

const speakButton = document.getElementById("speak-button");

speakButton.addEventListener("click", event => {
  // Check if the browser supports the SpeechRecognition API
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;

    if (speakButton.innerText == "Speak") {
        recognition.start();
    }
    else {
        recognition.stop();
        console.log("Stopped?");
    }

    recognition.addEventListener('start', (event) => { 
        speakButton.innerText = "Stop";
    });

    recognition.addEventListener('end', (event) => { 
        speakButton.innerText = "Speak";
    });

    recognition.onresult = event => {
      // Get the user's spoken command
      const command = event.results[0][0].transcript.trim();

      // Check if the command is "color" followed by a color name
      if (command.startsWith("color")) {
        // Set the color variable to the specified color
        color = command.split(" ")[1];
        var s = new Option().style;
        s.color = color;
        if (s.color == '') {
            status.innerText = "Failed: " + color + " is an invalid color"
        } else {
            // Redraw the circle with the new color
            status.innerText = "Successful: Set color to " + s.color;
            drawCircle();
        }
      }

      // Check if the command is "size" followed by a number
        if (command.startsWith("size")) {
            // Set the size variable to the specified size
            size = parseInt(command.split(" ")[1], 10);
            // Check if the size is too large or too small
            if (isNaN(size) || size < 1) {
                size = 1;
                status.innerText = "Failed: Given size is less than minimum size of 1";
            } else if (size > 300) {
                size = 300;
                status.innerText = "Failed: " + size + " is more than maximum size of 300";
            } else {
                // Redraw the circle with the new size
                drawCircle();
                status.innerText = "Successful: Size is " + size;
            }
        }

        // Check if the command is "help"
        if (command.startsWith("help")) {
            helpLine.style.display = 'block';
        }
    };
  } else {
    console.log("Sorry, your browser doesn't support the SpeechRecognition API");
  }
});

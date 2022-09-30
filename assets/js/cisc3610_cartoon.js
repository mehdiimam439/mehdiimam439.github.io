/*
    Cartoon
    by Mehdi Imam
    CISC 3610
    9/29/2022
*/

//Set up canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set canvas extents to window to fill entire window
canvas.width = 878;
canvas.height = 800;

//Shortcut variables for width, height, and colors
var width = canvas.width;
var height = canvas.height;
var russianViolet = "#300350";
var mardiGras = "#94167f";
var cerisePink = "#e93479";
var rajah = "#f9ac53";
var persianRose = "#f62e97";
var persianBlue = "#153cb4"

//Sets background to solid black
canvas.style.backgroundColor = "black";

//Creates a sky gradient
var skyGradient = ctx.createLinearGradient(0, 0, 0, 540);
skyGradient.addColorStop(0, mardiGras);
skyGradient.addColorStop(1, persianBlue);

//Creates sun gradient
var sunGradient = ctx.createLinearGradient(0, 0, 0, 250);
sunGradient.addColorStop(0, rajah);
sunGradient.addColorStop(1, cerisePink);

//Creates text gradient
var textGradient = ctx.createLinearGradient(0, 0, 0, 300);
textGradient.addColorStop(0, persianRose);
textGradient.addColorStop(0.5, rajah);

//Creates moon gradient
var moonGradient = ctx.createLinearGradient(0, 0, 0, 800);
moonGradient.addColorStop(0.5, 'white');
moonGradient.addColorStop(0.9, 'black');

//Creates cloud gradient
var cloudGradient = ctx.createLinearGradient(0, 0, 0, 250);
cloudGradient.addColorStop(0.2, 'blue');
cloudGradient.addColorStop(0.9, 'red');

//Creates cloud gradient
var treeGradient = ctx.createLinearGradient(0, 0, 0, 650);
treeGradient.addColorStop(0.5, 'lime');
treeGradient.addColorStop(1, 'blue');

//Objects for future reference
const sun = {x: width/2, y: 250, radius: 200};
const ground = {lineDensity: 10, linePerspective: 5, horizonStart: 350};

//Creates sky
ctx.fillStyle = skyGradient;
ctx.fillRect(0, 0, width, 350);

//Creates the sun cut at the horizon
ctx.save();
ctx.rect(sun.x - sun.radius, sun.y - sun.radius, sun.radius * 2, ground.horizonStart - (sun.y-sun.radius));
ctx.clip();
ctx.beginPath();
ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
ctx.fillStyle = sunGradient;
ctx.fill();
ctx.restore();

//Erases lines in sun up to horizon using background gradient overlay
ctx.fillStyle = skyGradient;
var j = 2;
for(var i = sun.y - 20; i < ground.horizonStart; i += sun.radius / 10) {
    j += 2;
    ctx.fillRect(sun.x - sun.radius, i, sun.radius * 2, j);
}

//Creates ground

    ctx.beginPath();

    //Creates horizontal ground
    for(var i = ground.horizonStart; i <= height; i += ground.lineDensity) {
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }

    //Creates vertical ground lines
    for(var i = -width / 2; i <= width; i += ground.lineDensity) {
        ctx.moveTo(width / 2 + i, ground.horizonStart);
        ctx.lineTo(width / 2 + i * ground.linePerspective, height)
    }

    ctx.strokeStyle = persianRose;
    ctx.stroke();

//Creates mountain outline and filled background clipped at bottom
ctx.save();
ctx.fillStyle = 'black';
ctx.rect(0, 190, width, 200);
ctx.clip();
ctx.beginPath();
ctx.moveTo(0, 350);
ctx.lineTo(53, 280);
ctx.lineTo(104, 308);
ctx.lineTo(158, 230);
ctx.lineTo(209, 259);
ctx.lineTo(250, 259);
ctx.lineTo(280, 284);
ctx.lineTo(305, 265);
ctx.lineTo(357, 322);
ctx.lineTo(391, 304);
ctx.lineTo(456, 325);
ctx.lineTo(492, 287);
ctx.lineTo(537, 306);
ctx.lineTo(578, 306);
ctx.lineTo(604, 265);
ctx.lineTo(645, 287);
ctx.lineTo(700, 230);
ctx.lineTo(742, 278);
ctx.lineTo(783, 278);
ctx.lineTo(804, 309);
ctx.lineTo(844, 289);
ctx.lineTo(width, 350);
ctx.lineTo(width, 350 + 99999);
ctx.fill();

//Creates mountain lines clipped at bottom
for(var i = 0; i < 160; i+=6) {
  ctx.moveTo(0, 350 + i);
  ctx.lineTo(53, 280 + i);
  ctx.lineTo(104, 308 + i);
  ctx.lineTo(158, 230 + i);
  ctx.lineTo(209, 259 + i);
  ctx.lineTo(250, 259 + i);
  ctx.lineTo(280, 284 + i);
  ctx.lineTo(305, 265 + i);
  ctx.lineTo(357, 322 + i);
  ctx.lineTo(391, 304 + i);
  ctx.lineTo(456, 325 + i);
  ctx.lineTo(492, 287 + i);
  ctx.lineTo(537, 306 + i);
  ctx.lineTo(578, 306 + i);
  ctx.lineTo(604, 265 + i);
  ctx.lineTo(645, 287 + i);
  ctx.lineTo(700, 230 + i);
  ctx.lineTo(742, 278 + i);
  ctx.lineTo(783, 278 + i);
  ctx.lineTo(804, 309 + i);
  ctx.lineTo(844, 289 + i);
  ctx.lineTo(width, 350 + i);
}
ctx.strokeStyle = "#418cfc";
ctx.stroke();
ctx.restore();

//Creates text
ctx.beginPath();
ctx.font = "italic bold 30px Verdana";
ctx.fillStyle = textGradient;
ctx.fillText("C R E A T E D", 20, 60);
ctx.fillText("B Y", 50, 90);
ctx.fillText("M E H D I", 80, 120);
ctx.fillText("I M A M", 35, 150);
ctx.fill();

//Creates moon
ctx.beginPath();
ctx.save();
ctx.arc(200, 460, 100, Math.PI * 0.5, Math.PI * 1.5);
ctx.fillStyle = moonGradient;
ctx.fill();
ctx.clip();
ctx.beginPath();
ctx.arc(245, 460, 110, 0, Math.PI * 2);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.restore();

//Creates cloud
ctx.beginPath();
ctx.arc(600, 135, 60, 0, Math.PI * 2);
ctx.arc(680, 120, 80, 0, Math.PI * 2);
ctx.arc(760, 135, 60, Math.PI * 2, 0);
ctx.fillStyle = cloudGradient;
ctx.fill()

//Creates treehouse

  //Creates trunk
  ctx.fillStyle = sunGradient;
  ctx.fillRect(530, 480+60, 100, 220)

  //Creates door
  ctx.fillStyle = 'brown';
  ctx.fillRect(530+25, 480+190, 50, 90)
  ctx.beginPath();
  ctx.arc(590, 335+380, 10, 0, Math.PI * 2);
  ctx.fillStyle = rajah;
  ctx.fill();

  //Creates leaves
  ctx.beginPath();
  ctx.arc(500, 335+80, 60, 0, Math.PI * 2);
  ctx.arc(580, 320+80, 80, 0, Math.PI * 2);
  ctx.arc(660, 335+80, 60, Math.PI * 2, 0);
  ctx.arc(580, 420+80, 80, 0, Math.PI * 2);
  ctx.arc(660, 435+80, 60, Math.PI * 2, 0);
  ctx.arc(580, 420+80, 80, 0, Math.PI * 2);
  ctx.arc(500, 435+80, 60, 0, Math.PI * 2);
  ctx.fillStyle = treeGradient;
  ctx.fill();

  //Creates window
  ctx.beginPath();
  ctx.arc(580, 320+305, 30, 0, Math.PI * 2);
  ctx.moveTo(580, 595);
  ctx.lineTo(580, 655);
  ctx.moveTo(550, 625);
  ctx.lineTo(610, 625);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.stroke();

//Creates pond

  //Creates grass base
  ctx.save();
  ctx.beginPath();
  ctx.scale(3.52, 2.04);
  ctx.arc(70, 360, 20, 0, 2 * Math.PI, false);
  ctx.arc(110, 340, 23, 0, 2 * Math.PI, false);
  ctx.arc(90, 355, 30, 0, 2 * Math.PI, false);
  ctx.restore(); // restore to original state
  ctx.fillStyle = 'green'
  ctx.fill();

  //Creates water
  ctx.save();
  ctx.beginPath();
  ctx.scale(3.5, 2.02);
  ctx.arc(70, 360, 20, 0, 2 * Math.PI, false);
  ctx.arc(110, 340, 23, 0, 2 * Math.PI, false);
  ctx.arc(90, 355, 30, 0, 2 * Math.PI, false);
  ctx.restore(); // restore to original state
  ctx.fillStyle = persianBlue
  ctx.fill();

  //Creates grass
  ctx.beginPath();
  ctx.moveTo(256, 768);
  ctx.lineTo(263, 711);
  ctx.lineTo(264, 774);
  ctx.lineTo(264, 774);
  ctx.lineTo(269, 749);
  ctx.lineTo(272, 775);
  ctx.moveTo(371, 773);
  ctx.lineTo(367, 735);
  ctx.lineTo(363, 775);
  ctx.fillStyle = 'green'
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'green';
  ctx.stroke();

//Creates fish

  //Creates body
  ctx.save();
  ctx.beginPath();
  ctx.arc(321, 688, 30, 0, Math.PI * 2);
  ctx.fillStyle = persianBlue;
  ctx.fill();
  ctx.clip();
  ctx.beginPath();
  ctx.arc(321, 718, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.restore();

  //Creates tail
  ctx.save();
  ctx.beginPath();
  ctx.arc(321+50, 688, 30, 0, Math.PI * 2);
  ctx.fillStyle = persianBlue;
  ctx.fill();
  ctx.clip();
  ctx.beginPath();
  ctx.arc(321+50, 718, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'pink';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(351+50, 703, 30, 0, Math.PI * 2);
  ctx.fillStyle = persianBlue;
  ctx.fill();
  ctx.restore();

  //Creates eye
  ctx.beginPath();
  ctx.arc(311, 700, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();

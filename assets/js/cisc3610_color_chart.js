/*
    Color Chart Program
    by Mehdi Imam
    CISC 3610
    9/29/2022
*/

//Set up canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set canvas extents
canvas.width = 800;
canvas.height = 450;

//Creates JSON fruit array
var fruitData = [
    {name: "Strawberry", quantity: 15, color: "red"},
    {name: "Peach", quantity: 10, color: "pink"},
    {name: "Banana", quantity: 25, color: "yellow"},
    {name: "Pear", quantity: 10, color: "lime"},
    {name: "Grape", quantity: 20, color: "purple"}
]

//Adjustable vars for better looking graph
var fontSize = 50;
var barScale = 0.3; //Value from 0 to 1 recommended
var barFarness = 7;

//Creates measure lines
ctx.beginPath();
ctx.moveTo(fontSize * barFarness - ctx.lineWidth * 2, 0,);
ctx.lineTo(fontSize * barFarness - ctx.lineWidth * 2, fontSize * fruitData.length + ctx.lineWidth * 2);
ctx.lineTo(fontSize * barFarness + fontSize * 25 * barScale, fontSize * fruitData.length + ctx.lineWidth * 2);
for(var i = 0; i < (fontSize * fruitData.length + ctx.lineWidth * 2) / fontSize; i += 1) {
    ctx.moveTo(fontSize * barFarness - ctx.lineWidth * 2 + i * fontSize * 1.5, fontSize * fruitData.length + ctx.lineWidth * 2);
    ctx.lineTo(fontSize * barFarness - ctx.lineWidth * 2 + i * fontSize * 1.5, fontSize * fruitData.length + ctx.lineWidth * 2 + 20);
}
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.stroke();

//Writes text from fruitData array and creates appropriate length/color bars
ctx.font = fontSize + "px Arial";
ctx.fillStyle = 'black'
ctx.fillText("by Mehdi Imam", 0, fontSize * (fruitData.length + 3));
for(var i = 0; i <= fruitData.length; i++){
    ctx.fillStyle = 'black';
    ctx.fillText(fruitData[i].name, 0, fontSize * (i + 1));
    ctx.fillStyle = fruitData[i].color;
    ctx.fillRect(fontSize * barFarness, fontSize * i, fruitData[i].quantity * fontSize * barScale, fontSize);
}
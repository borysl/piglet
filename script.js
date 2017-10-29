'use strict';

// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "pink";

context.beginPath();
context.moveTo(70,70);
context.lineTo(70,40);
context.lineTo(40,40);
context.lineTo(40,50);
context.closePath();
context.fill();

context.beginPath();
context.moveTo(120,70);
context.lineTo(120,40);
context.lineTo(150,40);
context.lineTo(150,50);
context.closePath();
context.fill();

context.beginPath();
context.arc(95, 125, 60, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 0;
context.stroke();

context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 15, 0, 2*Math.PI, true);
context.closePath();
context.fill();

context.fillStyle = "white";

// Draw the left eye
context.beginPath();
context.arc(88, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the left eye
context.beginPath();
context.arc(102, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "black";

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Я - Паць!",15,175);
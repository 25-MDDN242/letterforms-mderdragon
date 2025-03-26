const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "legpointR": -14,
  "legpointL": 14,
  "armraiseR": -185,
  "armraiseL": 185,
  "dressliftR": 0,
  "dressliftL": 0
}

const letterB = {
  "legpointR": 0,
  "legpointL": 0,
  "armraiseR": 180,
  "armraiseL": 20,
  "dressliftR": 0,
  "dressliftL": -35
}

const letterC = {
  "legpointR": -14,
  "legpointL": 0,
  "armraiseR": -140,
  "armraiseL": 20,
  "dressliftR": 0,
  "dressliftL": -35
}

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(255);

  angleMode(DEGREES);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  
  let legR = letterData["legpointR"];
  let toeR = letterData["toepointR"]
  let ankleR = letterData["anklejointR"]
  let armR = letterData["armraiseR"]
  let legL = letterData["legpointL"];
  let toeL = letterData["toepointL"]
  let ankleL = letterData["anklejointL"]
  let armL = letterData["armraiseL"]
  let dressL = letterData["dressliftL"]
  let dressR = letterData["dressliftR"]

  fill(255, 229, 199)//skin

  push()
  translate(posx + 10, posy)
  rotate(legR)
  ellipse(0, 40 - legR/2, 12, 80)//right leg
  pop()

  push()
  translate(posx - 10, posy)
  rotate(legL)
  ellipse(0, 40 - legR/2, 12, 80)//left leg
  pop()

  push()
  translate(posx + 20, posy - 45)
  rotate(armR)
  ellipse(0, 25, 10, 60)//right arm
  pop()

  push()
  translate(posx - 20, posy - 45)
  rotate(armL)
  ellipse(0, 25, 10, 60)//left arm
  pop()

  fill(207, 41, 94)//red
  triangle(posx + 0, posy -40, posx -30, posy + 50, posx + 30, posy + 50)//skirt
  triangle(posx + 0, posy -20, posx -30, posy + 50, posx + dressL, posy + dressL + 35)//lift dress left
  triangle(posx + 0, posy -20, posx + dressR, posy + dressR + 35, posx + 30, posy + 50)//lift dress right
  triangle(posx + 0, posy + 20, posx -20, posy -50, posx + 20, posy -50)//bodice
  
  fill(0)//black
  ellipse(posx + 0, posy -80, 25, 30)//hair
  ellipse(posx + 0, posy -95, 20, 20)//bun

  push()
  translate(posx + 10, posy + 80)
  rotate(legR)
  ellipse(-legR * 1.5, -legR/2, 10, 15)//right foot
  pop()

  push()
  translate(posx - 10, posy + 80)
  rotate(legL)
  ellipse(-legL * 1.5, legL/2, 10, 15)//left foot
  pop()

  fill(255, 229, 199)//skin
  ellipse(posx + 0, posy -55, 12, 30)//neck
  ellipse(posx + 0, posy -70, 20, 30)//head
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}


/* these are optional special variables which will change the system */
var systemBackgroundColor = "#2a5587";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke()

  angleMode(DEGREES)

  let legR = letterData["legpointR"];
  let legL = letterData["legpointL"];
  let armR = letterData["armraiseR"];
  let armL = letterData["armraiseL"];
  let forearmR = letterData["elbowR"];
  let forearmL = letterData["elbowL"];
  let dressL = letterData["dressliftL"];
  let dressR = letterData["dressliftR"];

  fill(255, 229, 199)//skin

  push()
  translate(60, 100)
  rotate(legR)
  ellipse(0, 40 - legR/2, 12, 80)//right leg
  pop()

  push()
  translate(40, 100)
  rotate(legL)
  ellipse(0, 40 - legR/2, 12, 80)//left leg
  pop()

  fill(207, 41, 94)//red
  triangle(50, 60, 20, 150, 80, 150)//skirt
  triangle(50, 80, 50 -30, 150, 50 + dressL, 100)//lift dress left
  triangle(50, 80, 50 + dressR, 100, 80, 150)//lift dress right
  triangle(50, 120, 30, 50, 70, 50)//bodice
  
  fill(0)//black
  ellipse(50, 20, 25, 30)//hair
  ellipse(50, 5, 20, 20)//bun

  push()
  translate(60, 180)
  rotate(legR)
  ellipse(-legR * 1.5, -legR/2, 10, 15)//right foot
  pop()

  push()
  translate(40, 180)
  rotate(legL)
  ellipse(-legL * 1.5, legL/2, 10, 15)//left foot
  pop()

  fill(255, 229, 199)//skin
  ellipse(50, 45, 12, 30)//neck
  ellipse(50, 30, 20, 30)//head

  fill(255, 229, 199)//skin

  push()
  translate(70, 55)
  rotate(armR)
  ellipse(0, 10, 10, 30)//right arm
  pop()

  push()
  translate(30, 55)
  rotate(armL)
  ellipse(0, 10, 10, 30)//left arm
  pop()

  elbowR = map(armR, 0, 90, 0, 22)
  elbowL = map(armL, 0, 90, 0, 22)

  if(armR >= 0 && armR<= 90){
    push()
    translate(67 - elbowR, 77 - elbowR)
    rotate(forearmR)
    ellipse(0, 15, 10, 35)
    pop()
  } else if(armR <= 0 && armR>= -90) {
    push()
    translate(72 - elbowR, 77 + elbowR)
    rotate(forearmR)
    ellipse(0, 15, 10, 35)
    pop()
  } else {
    push()
    translate(117 + elbowR, 75 + elbowR)
    rotate(forearmR)
    ellipse(0, 15, 10, 35)
    pop()
  }

  if(armL >= 0 && armL<= 90){
    push()
    translate(28 - elbowL, 77 - elbowL)
    rotate(forearmL)
    ellipse(0, 15, 10, 35)
    pop()
  } else if(armL <= 0 && armL>= -90) {
    push()
    translate(32 - elbowL, 77 + elbowL)
    rotate(forearmL)
    ellipse(0, 15, 10, 35)
    pop()
  } else {
    push()
    translate(-17 + elbowL, 77 - elbowL)
    rotate(forearmL)
    ellipse(0, 15, 10, 35)
    pop()
  }



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["legpointR"]    = map(percent, 0, 100, oldObj["legpointR"], newObj["legpointR"]);
  new_letter["legpointL"] = map(percent, 0, 100, oldObj["legpointL"], newObj["legpointL"]);
  new_letter["armraiseR"] = map(percent, 0, 100, oldObj["armraiseR"], newObj["armraiseR"]);
  new_letter["armraiseL"]    = map(percent, 0, 100, oldObj["armraiseL"], newObj["armraiseL"]);
  new_letter["dressliftR"] = map(percent, 0, 100, oldObj["dressliftR"], newObj["dressliftR"]);
  new_letter["dressliftL"] = map(percent, 0, 100, oldObj["dressliftL"], newObj["dressliftL"]);
  new_letter["elbowR"] = map(percent, 0, 100, oldObj["elbowR"], newObj["elbowR"]);
  new_letter["elbowL"] = map(percent, 0, 100, oldObj["elbowL"], newObj["elbowL"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

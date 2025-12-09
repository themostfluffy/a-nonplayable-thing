  var potato = 0;
  var mult = 1;
  var pestige = 1;
  function setup() {
createCanvas(1500, 835);
}

function draw() {

  background(0, 0, 0);

  fill(255, 0, 0);
  ellipse(750, 417, 300, 300);
  
  stroke(255, 255, 255);
  textSize(15);
  text("Potato Count:", 0, 400);
  text("farms (cost: 200 potato) press m to buy", 0, 300);
  text("plants per farm (cost: 190 farms) press p to buy reg:200  farms", 0, 200);
  text(potato, 0, 420);
  text(mult, 0, 320);
  text(pestige, 0, 220);
  
  if (mouseIsPressed){ 
    potato = potato + (mult * pestige);
  } 

  if (money >= 200 && keyIsPressed && key=="m"){
mult = mult + 1;
potato = potato - 200;
  }
   if (mult >= 200 && keyIsPressed && key == "p") {
     pestige = pestige + 1;
     mult = mult - 190;
   }
}


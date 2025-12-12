let img;
var money = 0;
var mult = 1;
var pestige = 1;
var veggies = 1;
var score = 0;
function preload() {
  img = loadImage("russia.png");
}
function setup() {
  createCanvas(1500, 835);
}

function draw() {
  background(0, 0, 0);
  if (img) image(img, 0, 0);

  fill(255, 0, 0);
  ellipse(750, 417, 300, 300);

  stroke(255, 255, 255);
  textSize(50);
  text ("soviet potato farm simulator",500,100);
   textSize(25);

  text("Potato Count:", 0, 500);
  text("farms (cost: 200 potato) press m to buy", 0, 400);
  text("plants per farm (cost: 190 farms) press p to buy reg:200  farms",0,300);
  text("potatoes per plant(cost: 190 plants) press c to buy reg:200 plants",0,200);
  text("score:",1200,100);
  text("big farm buy (cost: 20,000 potato) press n to buy",0,370);
  text("big plants per farm buy (cost: 19,990 farms) press o to buy",0,270);
  text("big potatoes per plant buy (cost: 19,990 plants) press x to buy",0,170);

  text(score,1200,150);
  text(money, 0, 530);
  text(mult, 0, 430);
  text(pestige, 0, 330);
  text (veggies,0,230);

  score= money*(mult*(pestige*veggies))/1000;
  if (mouseIsPressed) {
    money = money + (mult*(pestige*veggies));
  }

  //regular buys
  if (money >= 200 && keyIsPressed && key == "m") {
    mult = mult + 1;
    money = money - 200;
  
  }
  if (mult >= 200 && keyIsPressed && key == "p") {
    pestige = pestige + 1;
    mult = mult - 190;
  }
    if (pestige >= 200 && keyIsPressed && key == "c") {
      veggies = veggies + 1;
      pestige = pestige - 190;
    }

    
    //big buys
    if (money >= 20000 && keyIsPressed && key == "n") {
      mult = mult + 100;
      money = money - 20000;
    }
    if (mult >= 20000 && keyIsPressed && key == "o") {
      pestige = pestige + 100;
      mult = mult - 19990;
    }
    if (pestige >= 20000 && keyIsPressed && key == "x") {
      veggies = veggies + 100;
      pestige = pestige - 19990;
    }
//huge buys
        if (money >= 2000000 && keyIsPressed && key == "b") {
          mult = mult + 10000;
          money = money - 2000000;
        }
        if (mult >= 2000000 && keyIsPressed && key == "i") {
          pestige = pestige + 10000;
          mult = mult - 1999990;
        }
        if (pestige >= 2000000 && keyIsPressed && key == "z") {
          veggies = veggies + 10000;
          pestige = pestige - 1999990;
        }
        //auto
if (money>= 50000000000000000000) {
  money = money + (mult*(pestige*veggies));
}


//extreme buys
if (keyIsPressed && key == "a" && money>=100000000000 ) {

  mult = mult +50000000000;
  money = money - 50000000000;
  
}
if (keyIsPressed && key == "s" && mult >= 100000000000) {

  pestige = pestige + 49999999990;
  mult = mult - 49999999990;
}


if (keyIsPressed && key == "d44" && pestige >= 100000000000) {
  veggies = veggies + 49999999990;
  pestige = pestige - 49999999990;
}




}


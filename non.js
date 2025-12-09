let img;
var money = 0;
var mult = 1;
var pestige = 1;
var veggies = 1;
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

  text(money, 0, 530);
  text(mult, 0, 430);
  text(pestige, 0, 330);
  text (veggies,0,230);

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
}

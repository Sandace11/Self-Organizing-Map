let som1;
let trainingSet = [];

let red = [];
let green = [];
let blue = [];
let yellow = [];
let orange = [];
let purple = [];
let dk_green = [];
let dk_blue = [];

red.push(1);
red.push(0);
red.push(0);

green.push(0);
green.push(1);
green.push(0);

dk_green.push(0);
dk_green.push(0.5);
dk_green.push(0.25);

blue.push(0);
blue.push(0);
blue.push(1);

dk_blue.push(0);
dk_blue.push(0);
dk_blue.push(0.5);

yellow.push(1);
yellow.push(1);
yellow.push(0.2);

orange.push(1);
orange.push(0.4);
orange.push(0.25);

purple.push(1);
purple.push(0);
purple.push(1);

trainingSet.push(red);
trainingSet.push(green);
trainingSet.push(blue);
trainingSet.push(yellow);
trainingSet.push(orange);
trainingSet.push(purple);
trainingSet.push(dk_green);
trainingSet.push(dk_blue);

let train;

function setup() {
    createCanvas(constWindowWidth, constWindowHeight);
    background(100);

    som1 = new Som();

    train = function () {
        if (!som1.done) {
            if (!som1.epoch(trainingSet)) {
                return false;
            }
        }
        return true;
    }
}

function draw() {

    if (!som1.done) {
        if (!train()) {
            som1.render();
        }
    } else {
        console.log("Done");
        noLoop();
    }
}
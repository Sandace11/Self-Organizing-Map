let som1;
let trainingSet = [];   //Temporary : dataset array

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



function setup() {      //Setup function
    createCanvas(constWindowWidth, constWindowHeight + 200);  //initialize canvas
    background(255);

    som1 = new Som();   //intantiate Som object

    // noLoop();
}

function draw() {   //Main loop
    background(255)
    //When trained for given no of iterations, som1.done == true
    if (!som1.done) {
        if (!som1.epoch(trainingSet)) { // one iteration of training
            console.log("Epoch Failed");
        }
    } else {    //When training is completed stop main loop
        console.log("Done");
        som1.render();
        noLoop();
    }
    fill(0, 102, 153);
    textSize(20);
    text('learning rate : ' + som1.learningRate.toFixed(5), 10, constWindowHeight + 40, constWindowWidth, 30);
    text('No of iterations : ' + som1.numOfIterationLeft, 10, constWindowHeight + 70, constWindowWidth, 30);
    text('Topological radius : ' + som1.neighbourhoodRadius.toFixed(3), 10, constWindowHeight + 100, constWindowWidth, 30);
    text('No of nodes : ' + constNumCellsAcross * constNumCellsDown, 10, constWindowHeight + 130, constWindowWidth, 30);
    text('Size of input vector : ' + constSizeOfInputVector, 10, constWindowHeight + 160, constWindowWidth, 30);

}
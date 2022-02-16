let som1;
let trainingSet = createData();   //Temporary : dataset array

function setup() {      //Setup function
    createCanvas(constWindowWidth, constWindowHeight + 200);  //initialize canvas
    background(255);

    som1 = new Som(constNumCellsDown, constNumCellsAcross,                      //instantiate Som object
        constSizeOfInputVector, constInitialTopologicalRadius,
        constStartLearningRate);
    // noLoop();
    // frameRate(5)
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
        noLoop();   //stop main loop
    }
    fill(0, 102, 153);
    textSize(18);
    text('Learning rate : ' + som1.learningRate.toFixed(5), 10, constWindowHeight + 40, constWindowWidth, 30);
    text('No of iterations : ' + som1.numOfIterationLeft, 10, constWindowHeight + 70, constWindowWidth, 30);
    text('Topological radius : ' + (som1.neighbourhoodRadius / constCellWidth).toFixed(3), 10, constWindowHeight + 100, constWindowWidth, 30);
    text('No of nodes : ' + constNumCellsAcross * constNumCellsDown, 10, constWindowHeight + 130, constWindowWidth, 30);
    text('Size of input vector : ' + constSizeOfInputVector, 10, constWindowHeight + 160, constWindowWidth, 30);
}
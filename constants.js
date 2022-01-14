const constWindowWidth = 400;
const constWindowHeight = 400;

const constNumCellsAcross = 40;
const constNumCellsDown = 40;

const constCellWidth = constWindowWidth/constNumCellsAcross;
const constCellHeight = constWindowHeight/constNumCellsDown;

//number of weights each node must contain. One for each element of 
//the input vector. In this example it is 3 because a color is
//represented by its red, green and blue components. (RGB)
const zconstSizeOfInputVector = 3;

//the number of epochs desired for the training
const constNumIterations = 1000;

//the value of the learning rate at the start of training
const constStartLearningRate = 0.1;
const constWindowWidth = 400; //width of the window
const constWindowHeight = 400; //height of the window 

const constNumCellsAcross = 10; // No of nodes in each row
const constNumCellsDown = 10;   //No of nodes in each column

const constCellWidth = constWindowWidth/constNumCellsAcross;
const constCellHeight = constWindowHeight/constNumCellsDown;

//number of weights each node must contain. One for each element of 
//the input vector. In this example it is 3 because a color is
//represented by its red, green and blue components. (RGB)
const constSizeOfInputVector = 4;

//the number of epochs desired for the training
const constNumIterations = 2000;
//2000

//the value of the learning rate at the start of training
const constStartLearningRate = 0.2;
//0.4 - 0.5 for Umatrix??

 //initial topological radius. Set to the higher value among window width and height divided by 2.
const constInitialTopologicalRadius = Math.max(constWindowWidth, constWindowHeight) / 2; 
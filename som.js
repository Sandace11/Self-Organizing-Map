
class Som {     //Class for defining SOMs. 
    constructor() {
        this.nodes = [];      //array of all the nodes in this SOM
        this.winningNode;
        this.mapRadius = Math.max(constWindowWidth, constWindowHeight) / 2;  //initial topological radius. Set to max value betn window width and height.
        this.timeConstant = constNumIterations / Math.log(this.mapRadius);  //Constant . used in calculation of neighborhood radius
        this.iterationCount;  //current iteration count
        this.neighbourhoodRadius;  //current neighbourhood radius
        this.influence; //this is the topological neighbourhood.
                            //this eqn : https://youtu.be/g8O6e9C_CfY?t=497

        this.learningRate = constStartLearningRate; //current learning rate. initially set to constStartLearningRate  
        this.done = false; //true when training is completed. i.e when specified no of iterations are finished

        //Create all the nodes for the lattice in the SOM object.
        for (let row = 0; row < constNumCellsAcross; ++row) {
            for (let col = 0; col < constNumCellsDown; ++col) {
                this.nodes.push(new Node(col * constCellWidth,    // left
                    (col + 1) * constCellWidth,   // right
                    row * constCellHeight,        // top
                    (row + 1) * constCellHeight,  // bottom
                    constSizeOfInputVector));   // num weights
            }
        }

    }

    findBestMatchingNode() {
        1;
    }

    render() {      //here the render() function of each node in the SOM is called to render the whole SOM
        for (let i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].render();
        }
    }

    epoch() {
        1;
    }

    finishedTraining() {
        1;
    }

    gaussian() {
        1;
    }
}
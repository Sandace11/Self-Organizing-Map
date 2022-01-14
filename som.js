
class Som {     //Class for defining SOMs. 
    constructor() {
        this.nodes = [];      //array of all the nodes in this SOM
        this.winningNode;
        this.mapRadius = Math.max(constWindowWidth, constWindowHeight) / 2;  //initial topological radius. Set to max value betn window width and height.
        this.timeConstant = constNumIterations / Math.log(this.mapRadius);  //Constant . used in calculation of neighborhood radius
        this.iterationCount = 1;  //current iteration count .Note that iteration count increases from 1,2,3....
        this.numOfIterationLeft = constNumIterations;  //Number of iterations left in training. Note starts at constNumIterations.
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

    epoch(data) {
        if (data[0].length != constSizeOfInputVector)
            return false;     //Make sure that provided data vector has the same number of elements that is specified in constants.js

        
        if (done)       //If numOfIterations left is 0, then training is done. so return
            return true;

        
        if (--this.numOfIterationLeft > 0) {    //Training portion for this epoch. if noOfIterationsLeft is 0, goto else statement
            
            const currentInputVectorIndex = RandInt(0, data.length - 1);    //select random data(index to be exact) vector from the dataset

            this.winningNode = findBestMatchingNode(data[currentInputVectorIndex]); //get the winning node for the given input

            // neighborhoodSize calculation
            this.neighbourhoodRadius = this.mapRadius * Math.exp(-this.iterationCount / this.timeConstant);

            //Adjust weights of winning node and its neighbours. So loop through each node in lattice(SOM)
            for (let n = 0; n < this.nodes.length; ++n) {
                
                //S(j,I(x))^2 part of eqn. i.e.  lateral distance betn winning node and each node. 
                //Square of euclidean distance betn winning node and each node. 
                const distToWinningNodeSquared = ((this.winningNode.m_dx - nodes[n].m_dx) * (this.winningNode.m_dx - nodes[n].m_dx))
                    + ((this.winningNode.m_dy - nodes[n].m_dy) * (this.winningNode.m_dy - nodes[n].m_dy));


                // check if node[n] lies within the neighbourhood radius
                if (distToWinningNodeSquared < (this.neighbourhoodRadius * this.neighbourhoodRadius)) {
                    // Topological neighbourhood function. Influence is less if node is further from winning node.
                    // Follows a gaussian distribution. Weights are adjusted accordingly
                    this.influence = exp(-(distToWinningNodeSquared) / (2 * this.neighbourhoodRadius * this.neighbourhoodRadius));

                    nodes[n].adjustWeights(data[currentInputVectorIndex],
                        this.learningRate,
                        this.influence);
                }
            }

            // For the next iteration, decay in learning rate
            this.learningRate = constStartLearningRate * exp(-this.iterationCount / this.numOfIterationLeft);

            ++this.iterationCount;

        } else {    //if noOfIterationsLeft is 0
            done = true;
        }

        return true;    //Successfully trained in this epoch
    }

    // finishedTraining() {    //Use som1.done directly. redundent
    //     return this.done;
    // }

}
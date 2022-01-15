
class Som {     //Class for defining SOMs. 
    constructor() {
        this.nodes = [];      //array of all the nodes in this SOM
        this.winningNode;   //Winning node for each iteration
        this.mapRadius = Math.max(constWindowWidth, constWindowHeight) / 2;  //initial topological radius. Set to the higher value among window width and height.
        this.timeConstant = constNumIterations / Math.log(this.mapRadius);  //Constant . used in calculation of neighborhood radius
        this.iterationCount = 1;  //current iteration count .Note that iteration count increases from 1,2,3....
        this.numOfIterationLeft = constNumIterations;  //Number of iterations left in training. Note: starts at constNumIterations and decreases down to 0
        this.neighbourhoodRadius = this.mapRadius;  //current neighbourhood radius
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
                    (row + 1) * constCellHeight));   // bottom
            }
        }
    }

    findBestMatchingNode(currentInputVector) {
        let winner;
        let LowestDistance = 999999;
        this.nodes.forEach(node => {
            let dist = node.calculateDistance(currentInputVector);
            if (dist < LowestDistance) {
                LowestDistance = dist;
                winner = node;
            }
        });
        return winner;
    }

    //render() function of each node in the SOM is called to render the whole SOM
    render() {
        strokeWeight(0.2);
        this.nodes.forEach(node => {
            node.render();  //Call render function of each node
        });
    }

    //Epoch is the training done in one iteration. Needs to be called constNumIterations(1000 to 2000) number of times
    epoch(data) {
        if (data[0].length != constSizeOfInputVector)
            return false;     //Make sure that provided data vector has the same number of elements that is specified in constants.js

        if (this.done)       //If numOfIterations left is 0, then training is done. so return
            return true;

        //Training portion for this epoch. if noOfIterationsLeft is 0, goto else statement
        if (--this.numOfIterationLeft > 0) {

            //select random data(index to be exact) vector from the dataset
            const currentInputVectorIndex = randInt(0, data.length - 1);
            //get the winning node for the given input
            this.winningNode = this.findBestMatchingNode(data[currentInputVectorIndex]);
            // neighborhoodSize calculation
            this.neighbourhoodRadius = this.mapRadius * Math.exp(-this.iterationCount / this.timeConstant);

            //Adjust weights of winning node and its neighbours. So loop through each node in lattice(SOM)
            this.nodes.forEach(node => {
                //S(j,I(x))^2 part of eqn. i.e.  lateral distance betn winning node and each node. 
                //Square of euclidean distance betn winning node and each node. 
                const distToWinningNodeSquared = ((this.winningNode.m_dx - node.m_dx) * (this.winningNode.m_dx - node.m_dx))
                    + ((this.winningNode.m_dy - node.m_dy) * (this.winningNode.m_dy - node.m_dy));

                // check if node[n] lies within the neighbourhood radius
                if (distToWinningNodeSquared < (this.neighbourhoodRadius * this.neighbourhoodRadius)) {
                    // Topological neighbourhood function. Influence is less if node is further from winning node.
                    // Follows a gaussian distribution. Weights are adjusted accordingly
                    this.influence = exp(-(distToWinningNodeSquared) / (2 * this.neighbourhoodRadius * this.neighbourhoodRadius));

                    node.adjustWeights(data[currentInputVectorIndex],
                        this.learningRate,
                        this.influence);
                }
            });

            this.render();

            // For the next iteration, decay in learning rate
            this.learningRate = constStartLearningRate * exp(-this.iterationCount / this.numOfIterationLeft);
            // this.learningRate = constStartLearningRate * exp(-this.iterationCount / this.timeConstant);

            ++this.iterationCount;

        } else {    //if noOfIterationsLeft is 0
            this.done = true;
        }

        return true;    //Successfully trained in this epoch
    }

}
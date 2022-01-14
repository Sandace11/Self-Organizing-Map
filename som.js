
class Som {     //Class for defining SOMs. 
    constructor() {
        this.nodes      //array of all the nodes in this SOM
        this.winningNode
        this.mapRadius = Math.max(constWindowWidth, constWindowHeight) / 2  //initial topological radius. Set to max value betn window width and height.
        this.timeConstant   
        this.iterationCount  //current iteration count
        this.neighbourhoodRadius  //current neighbourhood radius
        this.influence; //this is the topological neighbourhood.
                                    //this eqn : https://youtu.be/g8O6e9C_CfY?t=497

        this.learningRate = constStartLearningRate//current learning rate. initially set to constStartLearningRate  
        this.done = false //true when training is completed. i.e when specified no of iterations are finished
    }

    findBestMatchingNode() {

    }

    create() {

    }

    render() {

    }

    epoch() {

    }

    finishedTraining() {

    }

    gaussian() {

    }
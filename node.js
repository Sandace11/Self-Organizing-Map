
class Node {
    constructor(lft, rgt, top, bot, NumWeights) {
        this.m_iLeft = lft;
        this.m_iTop = top;
        this.m_iRight = rgt;
        this.m_iBottom = bot;

        this.m_dWeights = []; //this nodes weights (3 valued vector in my case(defined in constants.js) but kept flexible to accomdate higher dimensional inputs.
        this.m_dx = this.m_iLeft + (this.m_iRight - this.m_iLeft) / 2; //X position of node in lattice
        this.m_dy = this.m_iTop + (this.m_iBottom - this.m_iTop) / 2; //Y position of node in lattice

        for (let w = 0; w < NumWeights; w++) { // initialize weights to random value
            this.m_dWeights.push(Math.random().toFixed(2))
        }
    }

    render() {  //Render the node on the screen. p5 ko rect function use gareko. takes (topLeftKoX, topleftKoY, width, height)
        red = this.m_dWeights[0] * 255;
        green = this.m_dWeights[1] * 255;
        blue = this.m_dWeights[2] * 255;

        fill(red, green, blue);
        rect(this.m_iLeft, this.m_iTop, constCellWidth, constCellHeight);
    }

    calculateDistance(inputVector) {  //euclidean dist betn current input vector and this 
        let distance = 0;           // node's weight. note : yaa square root haalera return garne haina?
                                        // Every iteration ko best fit node nikaalna kaam lagxa 
        for (let i = 0; i < this.m_dWeights.length; i++) {
            distance += (inputVector[i] - this.m_dWeights[i]) *
                (inputVector[i] - this.m_dWeights[i]);
        }
        return distance;
    }

    AdjustWeights(target, learningRate, influence) {      //for adjustment of weights during learning. target is the aaileko input vector. 
        for (let w = 0; w < target.length; w++) {           //learningRate is the current learningRate as it isn't constant(only at beginning it was constStartLearningRate ) and its value decays with iterations
            this.m_dWeights[w] += learningRate * influence * (target[w] - this.m_dWeights[w]); //influence is the topological neighbourhood. also not constant through iterations
        }                                                                       //https://youtu.be/g8O6e9C_CfY?t=584 for reference of this weight update function.
    }
}
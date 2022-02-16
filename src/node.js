class Node {
    constructor(lft, rgt, top, bot) {
        this.m_iLeft = lft;
        this.m_iTop = top;
        this.m_iRight = rgt;    //Probably redundent . Try removing 
        this.m_iBottom = bot;   //Probably redundent . Try removing 
        this.uMatrixValue;

        this.m_dWeights = []; //this nodes weights (3 valued vector in this case(defined in constants.js) but kept flexible to accommodate(accomodate?) higher dimensional inputs.
        this.m_dx = this.m_iLeft + (this.m_iRight - this.m_iLeft) / 2; //X position of node in lattice
        this.m_dy = this.m_iTop + (this.m_iBottom - this.m_iTop) / 2; //Y position of node in lattice

        for (let w = 0; w < constSizeOfInputVector; w++) { // initialize weights to random value
            this.m_dWeights.push(+Math.random().toFixed(2))
        }
    }

    render() {  //Render the node on the screen. p5 ko rect function use gareko. takes (topLeftKoX, topleftKoY, width, height)       
        
        //------------------------------------------------------------
        //              CHOCOLATE WALA
        let w0 = this.m_dWeights[0];
        let w1 = this.m_dWeights[1];
        let w2 = this.m_dWeights[2];
        let w3 = this.m_dWeights[3];
        let m0 = (w0 + w1 + w2 + w3)/4;
        let m1 = (w0*w0 + w1*w1 + w2*w2 + w3*w3)/4;
        let m2 = (w0*w0*w0 + w1*w1*w1 + w2*w1*w1 + w3*w3*w3)/4;
        m0 = m0 > 1? 1: m0;
        m1 = m1 > 1? 1: m1;
        m2 = m2 > 1? 1: m2;
        fill(m0 * 255, m1 * 255, m2 * 255);

        // -------------------------------------------------

                        // UMATRIX WALA
        // console.log(this.uMatrixValue);
        // let a = this.uMatrixValue * 255;
        // fill(a);

        //----------------------------------------------------------

        // fill(this.m_dWeights[0] * 255, this.m_dWeights[1] * 255, this.m_dWeights[2] * 255);
        rect(this.m_iLeft, this.m_iTop, constCellWidth, constCellHeight);
    }

    calculateDistance(inputVector) {  //euclidean dist betn current input vector and this 
        let distance = 0;             // node's weight. note : yaa square root haalera return garne haina?
        // Every iteration ko best fit node nikaalna kaam lagxa 

        this.m_dWeights.forEach((wt, index) => {     //using array funtion
            distance += (inputVector[index] - wt) *
                (inputVector[index] - wt);
        });

        return distance;
    }

    //for adjustment of weights during learning. target is the aaileko input vector. 
    //learningRate is the current learningRate as it isn't constant(only at beginning it was constStartLearningRate ) 
    //and its value decays with iterations
    //influence is the topological neighbourhood. also not constant through iterations
    //https://youtu.be/g8O6e9C_CfY?t=584 for reference of this weight update function. 
    adjustWeights(target, learningRate, influence) {
        for (let w = 0; w < target.length; w++) {
            this.m_dWeights[w] += ((learningRate * influence * (target[w] - this.m_dWeights[w])) * 1).toFixed(2) * 1; // '* 1' because of weird javascript type conversion i dont understand
        }
    }
}

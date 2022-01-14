
class Node {
    constructor(lft, rgt, top, bot, NumWeights) {
        this.m_iLeft = lft;
        this.m_iTop = top;
        this.m_iRight = rgt;
        this.m_iBottom = bot;

        this.m_dWeights = []; //this nodes weights
        this.m_dx = this.m_iLeft + (this.m_iRight - this.m_iLeft) / 2; //position in lattice
        this.m_dy = this.m_iTop + (this.m_iBottom - this.m_iTop) / 2; //position in lattice

        for (let w = 0; w < NumWeights; w++) { // initialize weights to random value
            this.m_dWeights.push(Math.random().toFixed(2))
        }
    }

    render() {  //Render the node on the screen
        red = this.m_dWeights[0] * 255;
        green = this.m_dWeights[1] * 255;
        blue = this.m_dWeights[2] * 255;

        rect(this.m_iLeft, this.m_iTop, constCellWidth, constCellHeight);
    }

    calculateDistance(inputVector) {
        let distance = 0;
    
        for (let i = 0; i < this.m_dWeights.length; i++) {
            distance += (InputVector[i] - m_dWeights[i]) *
                        (InputVector[i] - m_dWeights[i]);
        }
    
        return distance;
    }
}

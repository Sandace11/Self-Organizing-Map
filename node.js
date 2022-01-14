
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

    render() {
        red = m_dWeights[0] * 255;
        green = m_dWeights[1] * 255;
        blue = m_dWeights[2] * 255;

        rect(this.m_iLeft, this.m_iTop, this.m_iRight, this.m_iBottom);
    }
}

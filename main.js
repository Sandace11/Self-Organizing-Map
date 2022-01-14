console.log("main.js");

let nodes = [];

function setup() {
    createCanvas(constWindowWidth, constWindowHeight);
    background(100);

    // node1 = new Node(0, 0, 0, 4, constSizeOfInputVector);
    // node1.render();


    for (let row = 0; row < constNumCellsAcross; ++row) {
        for (let col = 0; col < constNumCellsDown; ++col) {
            nodes.push(new Node(col * constCellWidth,         // left
                (col + 1) * constCellWidth,   // right
                row * constCellHeight,        // top
                (row + 1) * constCellHeight,  // bottom
                constSizeOfInputVector));   // num weights
        }
    }

    for (let i = 0; i < nodes.length; ++i) {
        nodes[i].render();
    }

    noLoop();
}

function draw() {
    1;
}
console.log("main.js");

let node1;

function setup() {
    createCanvas(400, 400);
    node1 = new Node(1, 2, 3, 4, 5);
    console.log(node1.m_dWeights);
}

function draw() {
    background(220);
}
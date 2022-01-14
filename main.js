console.log("main.js");

let node1;

function setup() {
    createCanvas(constWindowWidth, constWindowHeight);
    background(220);
    node1 = new Node(0, 0, 0, 4, zconstSizeOfInputVector);
    node1.render();
    console.log(node1.m_itop);


    noLoop();
}

function draw() {
    1;
}
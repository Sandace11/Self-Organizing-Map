
function createTempData() {
    let trainingSet = [];   //Temporary : dataset array

    let red = [];
    let green = [];
    let blue = [];
    let yellow = [];
    let orange = [];
    let purple = [];
    let dk_green = [];
    let dk_blue = [];

    red.push(1, 0, 0);
    green.push(0, 1, 0);
    dk_green.push(0, 0.5, 0.25);
    blue.push(0, 0, 1);
    dk_blue.push(0, 0, 0.5);
    yellow.push(1, 1, 0.2);
    orange.push(1, 0.4, 0.25);
    purple.push(1, 0, 1);

    trainingSet.push(red, green, blue, yellow, orange, purple, dk_green, dk_blue);

    return trainingSet;
}

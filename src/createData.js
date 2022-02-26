
function createData() {
    let trainingSet = countryData;     //countryDataNormalized.JS
    
    trainingSet.forEach(e => {
        for (let i = 0; i < e.length; i++) {
            e[i] = e[i].toFixed(5) * 1;
        }
    })

    return trainingSet;
}

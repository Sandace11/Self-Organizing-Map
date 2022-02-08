const csv = require('csv-parser')
const fs = require('fs')
const results = [];

function csvToJSON() {

    fs.createReadStream('sandNormalized.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log("Parsed!");
            console.log(results[0]);
            const dataJSON = JSON.stringify(results);  //convert object to JSON 
            fs.writeFileSync("./dataNormalized.json", dataJSON);
        });

}

csvToJSON();
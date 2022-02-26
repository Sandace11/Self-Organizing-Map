const fs = require('fs');

const loadJson = function () {
    try {
        const dataBuffer = fs.readFileSync('./Country-data-json.json'); //convert JSON to binary data buffer
        return JSON.parse(dataBuffer.toString());         //convert to object  

    } catch (error) {   //if notes.json isnt present, send an empty array.
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);  //convert object to JSON 
    fs.writeFileSync("./Country-data-updated.json", dataJSON);
}

const listNotes = function () {
    debugger;
    const notes = loadJson();
    notes.forEach((note, i) => {
        console.log(note);
    });
}


let datas = loadJson();

console.log(datas);
// selectCountries = ['Iceland',
//     'Switzerland',
//     'Japan',
//     'Luxembourg',
//     'Singapore',
//     'Haiti',
//     'Sierra Leone',
//     'Congo, Dem. Rep.',
//     'Burundi',
//     'Central African Republic'];

// let NewData = [];
// datas.forEach((data, i) => {
//     selectCountries.forEach(country => {
//         if (data.country == country) {
//             NewData.push({
//                 country: data.country,
//                 child_mort: data.child_mort,
//                 exports: data.exports,
//                 income: data.income,
//                 life_expec: data.life_expec
//             })
//         }
//     });
// });

let NewData = [];
datas.forEach((data, i) => {
            NewData.push({
                gdpp: data.gdpp,
                income: data.income,
                child_mort: data.child_mort
            })
});

saveNotes(NewData);
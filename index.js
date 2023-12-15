// •┈••✦ ❤ ✦••┈• LARMF API •┈••✦ ❤ ✦••┈•
// Get larmfs.  Do cool stuff.

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const { describe_traits } = require('./larmf_trait_phrases');


// parse thru the json file so the program can read it
function readLarmfData(filename) {
    let rawData = fs.readFileSync(filename);
    return JSON.parse(rawData);
}

// retrieve the larmf of a specified editionNumber
function findLarmf(data, editionNumber) {
    return data.find(item => item.edition === editionNumber);
}

// retrieve the larmfs of a particular type
function findLarmfsByType(data, type) {
    return data.filter(item => item.stats.type.toLowerCase() === type.toLowerCase());
}

// retrieve the larmfs with a particular stat of a particular value
function findLarmfsByStat(data, statType, statValue) {
    return data.filter(item => {
        return item.stats[statType] === statValue;
    });
}

// retrieve the larmfs with a specific lucky number
function findLarmfsByLuckyNumber(data, luckyNumber) {
    return data.filter(item => item.lucky_number === luckyNumber);
}

// get the larmf's physical description based on its traits
function getLarmfDescription(editionNumber) {
    const data = readLarmfData('larmf_metadata.json');
    const larmf = data.find(item => item.edition === editionNumber);

    if (larmf) {
        return describe_traits(larmf);
    } else {
        return null;
    }
}


// •┈••✦ ❤ ✦••┈• get larmf by id
// ex. localhost:3000/larmf/2 is metadata for larmf #2
app.get('/larmf/:edition', (req, res) => {
    let editionNumber = parseInt(req.params.edition, 10);
    if (isNaN(editionNumber)) {
        return res.status(400).send('edition number must be a valid number');
    }

    let data = readLarmfData('larmf_metadata.json');
    let larmf = findLarmf(data, editionNumber);

    if (larmf) {
        res.json(larmf);
    } else {
        res.status(404).send('larmf not found');
    }
});



// •┈••✦ ❤ ✦••┈• get larmfs of type: ______
// ex. localhost:3000/larmfs/type/Peachy returns json array of all peachy larmfs
app.get('/larmfs/type/:type', (req, res) => {
    let type = req.params.type;
    let data = readLarmfData('larmf_metadata.json');
    let larmfsByType = findLarmfsByType(data, type);

    if (larmfsByType.length > 0) {
        res.json(larmfsByType);
    } else {
        res.status(404).send('no larmfs found for the specified type');
    }
});



// •┈••✦ ❤ ✦••┈• get larmfs with stat value of: ___ _____
// ex. http://localhost:3000/larmfs/stats/slime/3 returns json array of all larmfs with slime stat of 3
app.get('/larmfs/stats/:stat/:value', (req, res) => {
    let statType = req.params.stat;
    let statValue = parseInt(req.params.value, 10);

    if (isNaN(statValue)) {
        return res.status(400).send('stat value must be a valid number');
    }

    let data = readLarmfData('larmf_metadata.json');
    let larmfsByStat = findLarmfsByStat(data, statType, statValue);

    if (larmfsByStat.length > 0) {
        res.json(larmfsByStat);
    } else {
        res.status(404).send(`no larmfs found with ${statType} stat of ${statValue}`);
    }
});


// •┈••✦ ❤ ✦••┈• get larmfs with lucky number: ____ 
// ex. http://localhost:3000/larmfs/luckynumber/7 returns a json array of larmfs with lucky number=7
app.get('/larmfs/luckynumber/:number', (req, res) => {
    let number = parseInt(req.params.number, 10);

    if (isNaN(number)) {
        return res.status(400).send('lucky number must be a valid number');
    }

    let data = readLarmfData('larmf_metadata.json');
    let larmfsWithLuckyNumber = findLarmfsByLuckyNumber(data, number);

    if (larmfsWithLuckyNumber.length > 0) {
        res.json(larmfsWithLuckyNumber);
    } else {
        res.status(404).send(`no larmfs found with lucky number ${number}`);
    }
});


// •┈••✦ ❤ ✦••┈• get a larmf's description (*WIP for GPT)
// ex. localhost:3000/larmf/description/2 retrieves a a description of the larmf's appearance that can be used for an image generator prompt, as alt text, etc.
app.get('/larmf/description/:edition', (req, res) => {
    let editionNumber = parseInt(req.params.edition, 10);
    if (isNaN(editionNumber)) {
        return res.status(400).send('Edition number must be a valid number');
    }

    let description = getLarmfDescription(editionNumber);
    if (description) {
        console.log(description);
        res.send(description);
    } else {
        res.status(404).send('Larmf not found');
    }
});





// •┈••✦ ❤ ✦••┈• rip it
app.listen(port, () => {
    console.log(`Larmf API now listening at http://localhost:${port}`);
});


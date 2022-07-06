const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const returnedDataJson = () => {
    return JSON.parse(fs.readFileSync('./data/index.json'));
}

async function writePersonJson(userJson) {
    fs.writeFileSync('./data/index.json', JSON.stringify(userJson));
}

// // krijgt een json binnen met 3 velden naam, voornaam en telefoonnummer. De telefoonnummer is de primary key in de data.json
// app.post('/addPerson', async (req, res) => {
//     const dataAsJson = returnedDataJson();
//     const item = dataAsJson.findIndex(item => item.phoneNumber === req.body.phoneNumber);
//     if (item >= 0) {
//         res.status(401).send({
//             'msg': 'userAlreadyExists'
//         });
//     } else {
//         const userData = req.body;

//         dataAsJson.push(userData);

//         writePersonJson(dataAsJson);

//         const msg = "personAdded";

//         res.status(200).send({
//             msg
//         });
//     }
// });

// // krijgt een json binnen met 1 veld, telefoonnummer. De telefoonnummer is de primary key in de data.json
// app.post('/deletePerson', async (req, res) => {
//     const dataAsJson = returnedDataJson();
//     const item = dataAsJson.findIndex(item => item.phoneNumber === req.body.phoneNumber);
//     if (item <= 0) {
//         res.status(404).send({
//             'msg': 'personNotFound'
//         });
//     } else {
//         for(var i = 0 ; i < dataAsJson.length; i++) {
//             dataAsJson.splice(i, 1);
//         }
//         writePersonJson(dataAsJson);
//         res.status(200).send({
//             'msg': 'personDeleted'
//         });
//     }
// });

app.post('/post', async (req, res) => {
    const dataAsJson = returnedDataJson();
    const item = dataAsJson.findIndex(item => item.id === req.body.id);
    if (item >= 0) {
        res.status(401).send({
            'msg': 'teamAlreadyExist'
        });
    } else {
        const userData = req.body;

        dataAsJson.push(userData);

        writePersonJson(dataAsJson);

        const msg = "teamAdded";

        res.status(200).send({
            msg
        });
    }
});

// returns all teams on the list
app.get('/teams', async (req, res) => {
    const dataAsJson = returnedDataJson();
    res.status(200).send(dataAsJson);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
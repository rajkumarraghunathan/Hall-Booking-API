const express = require('express');
const Room = require('./Component/Room');


const app = express();
app.use(express.json());




app.use(Room);

const Portal = 4000;
app.listen(Portal, () => {
    console.log(`App is Running Successfully in a Portal - ${Portal}`);
})
const express = require('express');
const bookingData = require('../RoomData/roomBookedData');
const customerData = require('../RoomData/customerData');
const customerBookedData = require('../RoomData/customerBookedData');
const router = express.Router();

//Create a Rooms for to store a Data
const rooms = [];

//Post Call
//Creating a Room
router.post('/rooms', (req, res) => {

    const { RoomName, Number_of_Seats, Amenisties, Price_for_1hr, Booking_status } = req.body;


    try {

        if (!Number_of_Seats || !Amenisties || !Price_for_1hr || Booking_status || Booking_status) {
            return res.status(400).json.send({ error: 'Missing required properties' });
        }

        const id = rooms.length + 1;
        const room = {
            id,
            RoomName,
            Number_of_Seats,
            Amenisties,
            Price_for_1hr,
            Booking_status
        }

        rooms.push(room);

        res.status(200).send({
            message: 'Room was created SuccessFully',
            data: rooms
        })
    }
    catch (error) {

        res.send(
            {
                message: 'Internal Server Error',
                error: error
            }
        );
    }
})


//Booking a Room 
//post
const booking = [];
router.post('/bookingRoom', (req, res) => {
    const { CustomerName, Date, startTime, endTime } = req.body;
    try {
        if (!CustomerName || !Date || !startTime || !endTime) {
            return res.status(400).send("Data missing ,Kindly Fill all required data")
        }

        const book = {
            CustomerName,
            Date,
            startTime,
            endTime,

        }

        booking.push(book);

        res.send(
            {
                message: 'Room was Booked',
                data: booking
            }
        )
    }
    catch (error) {
        console.log(error);
        res.send(
            {
                message: 'Internal Server Error',
                error: error
            });
    }
})


//List All Rooms with Booked Date
//GET

router.get('/roomsData', (req, res) => {
    try {
        // console.log(bookingData());
        const bookedRoomsDetails = bookingData();
        res.send({
            message: 'List All Rooms with Booked Date',
            data: bookedRoomsDetails
        })
    }
    catch (error) {
        res.status(500).send(
            {
                message: 'Internal Server Error',
                error: error
            });
    }
})


// List all Customer data with Booked Data 

router.get('/customerData', (req, res) => {
    try {
        // console.log(bookingData());
        const customerBookedRoomsDetails = customerData();
        res.send({
            message: 'List all Customer data with Booked Data ',
            data: customerBookedRoomsDetails
        })
    }
    catch (error) {
        res.status(500).send(
            {
                message: 'Internal Server Error',
                error: error
            });
    }
})
// List how many times Customer booked a room 

router.get('/customerBookedData', (req, res) => {
    try {
        // console.log(bookingData());
        const customerBookedDetails = customerBookedData();
        res.send({
            message: 'List all Customer data with Booked Data ',
            data: customerBookedDetails
        })
    }
    catch (error) {
        res.status(500).send(
            {
                message: 'Internal Server Error',
                error: error
            });
    }
})




module.exports = router;
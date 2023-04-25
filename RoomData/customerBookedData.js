
const customerBookedData = () => {
    const Data = [
        {
            CustomerName: 'xyz',
            RoomName: 'AC',
            Date: '19/4/23',
            startTime: '6:30 AM',
            endTime: '08:00PM',
            bookingId: "01",
            bookingDate: "18/4/23",
            bookingStatus: 'Booked'
        },
        {
            CustomerName: 'YYY',
            RoomName: 'NON-AC',
            Date: '18/4/23',
            startTime: '6:30 AM',
            endTime: '08:00PM',
            bookingId: "02",
            bookingDate: "17/4/23",
            bookingStatus: 'Booked'
        },
        {
            CustomerName: 'ZZZ',
            RoomName: 'Delux',
            Date: '18/4/23',
            startTime: '6:30 AM',
            endTime: '08:00PM',
            bookingId: "03",
            bookingDate: "17/4/23",
            bookingStatus: 'Booked'
        }
    ]
    return Data;
}


module.exports = customerBookedData;
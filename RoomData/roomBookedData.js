
const roomData = () => {
    const Data = [
        {
            RoomName: 'AC',
            bookedStatus: 'Booked',
            CustomerName: 'xyz',
            Date: '19/4/23',
            startTime: '6:30 AM',
            endTime: '08:00PM'
        },
        {
            RoomName: 'NON-AC',
            bookedStatus: 'Not Booked',
            CustomerName: 'Not Booked',
            Date: 'NILL',
            startTime: 'NILL',
            endTime: 'NILL'
        },
        {
            RoomName: 'NON-AC',
            bookedStatus: 'Booked',
            CustomerName: 'YYY',
            Date: '18/4/23',
            startTime: '6:30 AM',
            endTime: '08:00PM'
        }
    ]
    return Data;
}


module.exports = roomData;
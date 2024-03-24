import {Reservation} from '../database.js'
import { Op } from 'sequelize';


async function addReservation(req, res){
    const data = req.body;

    await Reservation.create({
        name: data.name,
        event_type: data.eventType,
        company_name: data.companyName,
        meal_type: data.mealType,
        phone: data.phone,
        date_time: data.eventDate + ' ' + data.eventStartTime,
        email: data.email,
        count: data.numberOfPeople,
        remarks: data.remarks
    })
    .then(result => {
        console.log('Reservation added successfully:', result);
        res.status(201).json({ message: 'Reservation added successfully', record: result});
    })
    .catch(error => {
        console.error('Unable to add reservation:', error.message);
        res.status(500).json({ message: 'Unable to add reservation', error: error.message});
    });
}

async function getAvailability(params, res){
    const date = params.date;
    console.log('Checking availability for date:', date);

    await Reservation.findAll({
        where: {
            date_time: {
                [Op.startsWith]: date
            }
        }
    })
    .then(result => {
        console.log('Reservations found:', result);
        if(result.length > 0){
            res.status(403).json({ message: 'Date is Not Available'});
        } else {
            res.status(200).json({ message: 'Date is Available'});
        }
    })
    .catch(error => {
        console.error('Unable to check availability:', error.message);
        res.status(500).json({ message: 'Error in checking avalilability', error: error.message});
    });
}

export { addReservation, getAvailability };
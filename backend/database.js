import { Sequelize, DataTypes } from "sequelize";
import reservationModel from "./models/reservation.js";

const sequelize = new Sequelize(
    'hotel',
    'root',
    'cccc',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(error => {
    console.error('Unable to connect to the database:', error);
});


const Reservation = reservationModel(sequelize, DataTypes);



sequelize.sync()
.then(() => {
    console.log('All models were synchronized successfully.');
})
.catch(error => {
    console.error('Unable to synchronize the models:', error);
});


export {Reservation};


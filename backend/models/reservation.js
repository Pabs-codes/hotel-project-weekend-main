export default function reservationModel (sequelize, DataTypes) {
    const reservation = sequelize.define('reservation', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        event_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meal_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        date_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'reservation',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
        ]
    });
    return reservation;
}
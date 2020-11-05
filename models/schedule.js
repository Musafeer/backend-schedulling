
module.exports = (sequelize, DataTypes) => {
	const Schedules = sequelize.define('Schedules', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        services: DataTypes.STRING
	});

	return Schedules;

};
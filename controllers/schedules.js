var Model = require('../models')

const schedules = {
    
	getAllSchedules: async (req, res) => {
		let schedules = []
		try {
			schedules = await Model.Schedules.findAll()
		} catch(e) {
				console.log(e)
		}

		res.json(schedules)
	},

	getSchedule: async (req, res) => {
		let schedule = []
		try {
			schedule = await Model.Schedules.findOne({
				where: {
					id: req.params.id
				}
			})
		} catch(e) {
				console.log(e)
		}

		res.json(schedule)
	},

	createSchedule: async (req, res) => {
		let schedule = {}

		console.log(req)

		try {
			
			schedule = await Model.Schedules.create({
				name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                date: req.body.date,
                time: req.body.time,
                services: req.body.services
			})

		} catch(e) {
			console.log(e)
		}

		res.json(schedule)
	},

	updateSchedule: async (req, res) => {
		let schedule = {}

		try {
			schedule = await Model.Schedules.update(
				req.body, {
				where: {
					id: req.params.id
				}
			});
		} catch(e) {
			console.log(e)
		}
		
		res.json(schedule)
	},

	deleteSchedule: async (req, res) => {
		await Model.Schedules.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success'
		})
	},

};

module.exports = schedules
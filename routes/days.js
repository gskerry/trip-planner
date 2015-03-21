var dayrouter = require('express').Router();
var models = require('../models');

dayrouter.get('/days/:day', function (req, res, next) {

	var today = req.params.day
	console.log("today: " + today);

	// models.Hotel.find({}).exec(function (err, hotels) {
	// 	models.Restaurant.find({}).exec(function (err, restaurants) {
	// 		models.ThingToDo.find({}).exec(function (err, thingsToDo) {
	// 			res.render('index', {
	// 				all_hotels: hotels,
	// 				all_restaurants: restaurants,
	// 				all_things_to_do: thingsToDo
	// 			});
	// 		});
	// 	});
	// });
});

module.exports = dayrouter;
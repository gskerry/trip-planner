var router = require('express').Router();
var models = require('../models');

// var days = require('./days');
// router.use("/days", days);

/*router.get('/', function (req, res, next) {
	models.Hotel.find({}).exec(function (err, hotels) {
		models.Restaurant.find({}).exec(function (err, restaurants) {
			models.ThingToDo.find({}).exec(function (err, thingsToDo) {
				res.render('index', {
					all_hotels: hotels,
					all_restaurants: restaurants,
					all_things_to_do: thingsToDo
				});
			});
		});
	});
});*/

router.get('/', function (req, res, next) {
	models.Hotel.find({}).exec(function (err, hotels) {
		models.Restaurant.find({}).exec(function (err, restaurants) {
			models.ThingToDo.find({}).exec(function (err, thingsToDo) {
				models.Day.find({}).exec(function (err, days) {	
					res.render('index', {
						all_hotels: hotels,
						all_restaurants: restaurants,
						all_things_to_do: thingsToDo,
						all_days: days
					});
				});
			});
		});
	});
});

module.exports = router;
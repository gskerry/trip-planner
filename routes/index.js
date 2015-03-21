var router = require('express').Router();
var models = require('../models');

router.get('/', function (req, res, next) {
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
});

router.get('/day', function (req, res, next) {

	// var today = req.params.day
	console.log("WLECOME TO TODAY");

})


module.exports = router;
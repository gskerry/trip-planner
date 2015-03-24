var dayRouter = require('express').Router();
var models = require('../models');

/*dayRouter.get('/days/:day', function (req, res, next) {

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
});*/


// GET /days
dayRouter.get('/', function (req, res, next) {
	console.log("You've reached the days route via GET");
	// serves up all days as json
});

// POST /days
dayRouter.post('/', function (req, res, next) {
	// creates a new day and serves it as json
	console.log("You've reached the days route via POST")	


	var day = new models.Day({ 'number': 1 });
	day.save();
	console.log("Day saved!")
});

// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
	// serves a particular day as json
});

// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
	// deletes a particular day
});

/*dayRouter.use('/:id', attractionRouter);

// POST /days/:id/hotel
attractionRouter.post('/hotel', function (req, res, next) {
	// creates a reference to the hotel
});

// DELETE /days/:id/hotel
attractionRouter.delete('/hotel', function (req, res, next) {
	// deletes the reference of the hotel
});

// POST /days/:id/restaurants
attractionRouter.post('/restaurants', function (req, res, next) {
	// creates a reference to a restaurant
});

// DELETE /days/:dayId/restaurants/:restId
attractionRouter.delete('/restaurant/:id', function (req, res, next) {
	// deletes a reference to a restaurant
});

// POST /days/:id/thingsToDo
attractionRouter.post('/thingsToDo', function (req, res, next) {
	// creates a reference to a thing to do
});

// DELETE /days/:dayId/thingsToDo/:thingId
attractionRouter.delete('/thingsToDo/:id', function (req, res, next) {
// deletes a reference to a thing to do
});*/

module.exports = dayRouter;
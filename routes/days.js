var dayRouter = require('express').Router();
var bodyParser = require('body-parser');
var models = require('../models');

// Could define individually too... 
// var Day = require('../models').Day;


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
	var day = new models.Day({"number": req.body.number});
	day.save();

	// models.Day.creat()... creates var and runs day.save() in one step

	res.send("Day successfully saved!")
});

// GET /days/:id
/*dayRouter.get('/:id', function (req, res, next) {
	var id = req.params.id
	// console.log(id);
	// serves a particular day as json
	var dayObject = models.Day.findById(id).exec(function (err, day) {
		// console.log(day);
		res.json(day);
	});
});*/
// ALT
dayRouter.get('/:num', function (req, res, next) {
	var num = req.params.num
	// console.log(id);
	// serves a particular day as json
	var dayObject = models.Day.find({ 'number' : num }).exec(function (err, day) {
			currentDayId = day[0]._id;
			res.send(currentDayId);
		});
});



// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
	// deletes a particular day
});

// Catches anything that has path with MORE than just /:id
dayRouter.use('/:id', attractionRouter);



// POST /days/:id/hotel
attractionRouter.post('/hotel', function (req, res, next) {
	// creates a reference to the hotel
	res.send("You've reached the hotels route via POST")
	res.json("You've reached the hotels route via POST")	
});

/*
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
});
*/

module.exports = dayRouter;
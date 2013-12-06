/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  sayHello: function (req, res) {
    res.send('hello world!');
  },
  
  view: function (req, res) {
  	if (!req.param('id')) {
  		return res.send("Invalid ID", 404);
  	} else {
	  	User.findOne(req.param('id')).exec(function (err, user) {
	  		if (err) return res.send(err, 500);
	  		if (!user) return res.send("User not found", 404);
	  		res.send(user);
	  	});
  	}
  },

};

/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

	adapter: 'mysql',

	// set attributes for the model
  attributes: {
    id: {
    	type: 'integer',
    	required: true
    },
    username: {
    	type: 'string',
    	required: true
    },
    password: {
    	type: 'string',
    	minLength: 6,
    	required: true
    },
    email: {
    	type: 'email',
    	required: true
    },
    firstName: {
    	type: 'string',
    	required: true
    },
    lastName: {
    	type: 'string',
    	required: true,
    },
    nickName: 'string'
  }

  // Saving a record
  // Find the user
  // User.findOne(1).done(function(err, user) {
  // 	// update the email attribute
  // 	user.email='junerey.casuga@gmail.com';

  // 	// save the updated value
  // 	user.save(function(err) {
  // 		console.log('user saved');
  // 	});
  // });

  // // Deleting a record
  // // Find the user
  // User.findOne(1).done(function(err, user) {
  // 	// destroy the record
  // 	user.destroy(function(err) {
  // 		console.log('user deleted');
  // 	});
  // });


};

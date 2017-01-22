var keystone = require('keystone');

var Hero = keystone.list('Hero');
var Skill = keystone.list('Skill');
var Profile = keystone.list('Profile');
var Project = keystone.list('Project');
var Education = keystone.list('Education');
var Experience = keystone.list('Experience');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.data = {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('init', function(next) {
		Hero.model.findOne({ active: true }).sort('sortOrder').exec(function(err, result) {
			locals.data.hero = result;

			next(err);
		});
	});

	view.on('init', function(next) {
		Profile.model.findOne({ active: true }).sort('sortOrder').exec(function(err, result) {
			locals.data.profile = result;

			next(err);
		});
	});

	view.on('init', function(next) {
		Experience.model.find({ active: true }).sort('sortOrder').exec(function(err, result) {
			locals.data.experiences = result;

			next(err);
		});
	});

	view.on('init', function(next) {
		Skill.model.find({ active: true }).sort('-proficiency').exec(function(err, result) {
			locals.data.skills = result;

			next(err);
		});
	})

	view.on('init', function(next) {
		Education.model.find({ active: true }).populate('graduation.degree').sort('sortOrder').exec(function(err, result) {
			locals.data.educations = result;

			next(err);
		});
	});

	view.on('init', function(next) {
		Project.model.find({ active: true }).sort('sortOrder').exec(function(err, result) {
			locals.data.projects = result;

			next(err);
		});
	});

	// Render the view
	view.render('index');
};

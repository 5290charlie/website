var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Hero Model
 * ==========
 */

var Hero = new keystone.List('Hero', {
	sortable: true
});

Hero.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	heading: { type: String, required: true, initial: true, default: 'Charlie McClung' },
	subHeading: { type: String, initial: true, default: 'Software Engineer' },
	buttonText: { type: String, initial: true, default: 'Contact Me' }
});

Hero.defaultColumns = 'active, name, heading, subHeading, buttonText';
Hero.register();

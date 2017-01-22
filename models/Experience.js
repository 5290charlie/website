var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Experience Model
 * ==========
 */

var Experience = new keystone.List('Experience', {
	sortable: true
});

Experience.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	date: {
		start: { type: Types.Date, initial: true },
		end: { type: Types.Date, initial: true }
	},
	title: { type: String, required: true, initial: true },
	location: { type: Types.Location, defaults: { country: 'United States', state: 'Colorado' } },
	details: { type: Types.Html, wysiwyg: true, height: 250 }
});

Experience.defaultColumns = 'active, name, date.start, date.end, title, location';
Experience.register();

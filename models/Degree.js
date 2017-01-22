var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Degree Model
 * ==========
 */

var Degree = new keystone.List('Degree', {
	sortable: true
});

Degree.add({
	name: { type: String, required: true, initial: true },
	short: { type: String, required: true, initial: true },
	description: { type: Types.Textarea, initial: true }
});

Degree.defaultColumns = 'short, name';
Degree.register();

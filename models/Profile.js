var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Profile Model
 * ==========
 */

var Profile = new keystone.List('Profile', {
	sortable: true
});

Profile.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	heading: { type: String, required: true, initial: true, default: 'Personal Profile' },
	subHeading: { type: String, initial: true, default: "Life's a garden. Dig it." },
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 300 }
});

Profile.defaultColumns = 'active, name, heading, subHeading';
Profile.register();

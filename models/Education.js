var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Education Model
 * ==========
 */

var Education = new keystone.List('Education', {
	sortable: true
});

Education.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	date: {
		start: { type: Types.Date, initial: true },
		end: { type: Types.Date, initial: true }
	},
	graduation: {
		complete: { type: Boolean, default: false, label: 'Graduated?' },
		date: { type: Types.Date, dependsOn: { 'graduation.complete': true } },
		focus: { type: String, dependsOn: { 'graduation.complete': true } },
		degree: { type: Types.Relationship, ref: 'Degree', dependsOn: { 'graduation.complete': true } },
	},
	details: { type: Types.Html, wysiwyg: true, height: 250 }
});

Education.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Education.defaultColumns = 'active, name, date.start, date.end';
Education.register();

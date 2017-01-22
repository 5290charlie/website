var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
	sortable: true
});

Project.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	url: { type: Types.Url, required: true, initial: true },
	screenshot: { type: Types.CloudinaryImage },
	categories: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
});

Project.defaultColumns = 'active, name, url';
Project.register();

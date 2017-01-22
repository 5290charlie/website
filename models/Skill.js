var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Skill Model
 * ==========
 */

var Skill = new keystone.List('Skill', {
	sortable: true
});

Skill.add({
	active: { type: Boolean, default: true, initial: true },
	name: { type: String, required: true, initial: true },
	proficiency: { type: Types.Number, required: true, initial: true }
});

Skill.defaultColumns = 'active, name, proficiency';
Skill.register();

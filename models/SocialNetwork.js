var keystone = require('keystone');
var Types = keystone.Field.Types;

var networks = [
  'twitter',
  'facebook',
  'linkedin',
  'github',
  'googleplus'
];

/**
 * SocialNetwork Model
 * ==========
 */

var SocialNetwork = new keystone.List('SocialNetwork', {
	sortable: true,
  map: { name: 'network' },
  autokey: { path: 'slug', from: 'network', unique: true },
});

SocialNetwork.add({
	active: { type: Boolean, default: true, initial: true },
  network: { type: Types.Select, options: networks, required: true, initial: true },
  href: { type: Types.Url, required: true, initial: true }
});

SocialNetwork.defaultColumns = 'name, network, href';
SocialNetwork.register();

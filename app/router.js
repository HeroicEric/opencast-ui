import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browse');
  this.route('podcast', { path: 'podcasts/:id' });
});

export default Router;

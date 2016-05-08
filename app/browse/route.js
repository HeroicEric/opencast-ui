import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      podcasts: this.store.findAll('podcast')
    });
  }
});

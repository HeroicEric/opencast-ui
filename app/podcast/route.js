import Route from 'ember-route';
import RSVP from 'rsvp';
import get from 'ember-metal/get';

export default Route.extend({
  model(params) {
    let podcast = this.store.findRecord('podcast', params.id);
    let episodes = podcast.then((p) => get(p, 'episodes'));

    return RSVP.hash({
      episodes,
      podcast
    });
  }
});

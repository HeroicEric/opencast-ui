import Ember from 'ember';
import RSVP from 'rsvp';

const {
  Route,
  assign
} = Ember;

export default Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model(params = {}) {
    let query = {};

    if (params.query) {
      query = assign({}, query, { filter: { query: params.query } });
    }

    return RSVP.hash({
      podcasts: this.store.query('podcast', query)
    });
  }
});

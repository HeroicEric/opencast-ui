import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  queryParams: ['query'],

  query: '',

  handleSearchInput: task(function * (e) {
    let query = e.target.value;

    yield timeout(400);

    set(this, 'query', query);
  }).restartable()
});

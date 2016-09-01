import { test } from 'qunit';
import moduleForAcceptance from 'opencast/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user browses');

test('visiting /browse', function(assert) {
  server.createList('podcast', 10);

  visit('/browse');

  andThen(() => {
    assert.equal(currentURL(), '/browse');
    assert.equal(find('[data-t="podcast"]').length, 10);
  });
});

test('user can filter the list of podcasts', function(assert) {
  server.create('podcast', { title: 'Software Eng Daily' });
  server.create('podcast', { title: 'Ember Weekend' });
  server.create('podcast', { title: 'Accidental Tech' });

  visit('/');

  fillIn('[data-t="nav-search"]', 'Ember Weekend');

  andThen(() => {
    let podcasts = find('[data-t="podcast"]');

    assert.equal(podcasts.length, 1);
    assert.equal(podcasts.first().text().trim(), 'Ember Weekend');
  });
});

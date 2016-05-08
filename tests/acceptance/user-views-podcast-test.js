import { test } from 'qunit';
import moduleForAcceptance from 'opencast/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user views podcast');

test('visiting /podcasts/:id', function(assert) {
  let podcast = server.create('podcast', { title: 'Ember Weekend' });
  let episodes = server.createList('episode', 3, { podcastId: podcast.id });

  visit(`/podcasts/${podcast.id}`);

  andThen(() => {
    assert.equal(currentURL(), `/podcasts/${podcast.id}`);
    assert.equal(find('[data-t="page-title"]').text(), 'Ember Weekend');

    let episodeItems = find('[data-t="episode-item"]');
    assert.equal(episodeItems.length, 3);
    assert.equal(episodeItems.text(), episodes.map((e) => e.title ).join(''));
  });
});

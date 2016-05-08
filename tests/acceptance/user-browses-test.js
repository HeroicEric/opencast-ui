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

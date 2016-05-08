import { test } from 'qunit';
import moduleForAcceptance from 'opencast/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user visits index');

test('visiting / redirects to /browse', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/browse');
  });
});

import { test } from 'qunit';
import moduleForAcceptance from 'lookup/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | lookup');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

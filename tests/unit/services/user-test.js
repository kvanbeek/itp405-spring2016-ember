import { moduleFor, test } from 'ember-qunit';

moduleFor('service:user', 'Unit | Service | user', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('userLoggedIn() should set loggedIn to true', function (assert) {
  let user = this.subject();
  user.userLoggedIn();
  assert.equal(user.loggedIn, true);
});

test('userLoggedOut() should set loggedIn to false', function (assert) {
  let user = this.subject();
  user.userLoggedOut();
  assert.equal(user.loggedIn, false);
});
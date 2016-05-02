import { moduleFor, test } from 'ember-qunit';

moduleFor('service:shopping-cart', 'Unit | Service | shopping cart', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test("setTotalPrice() takes array of item and calculates the sum of their prices", function (assert) {
  var cart = this.subject();
  cart.items = [{id: 1, productName: "cart test", price: 25 }, {id: 2, productName: "cart test 2", price: 25 }];
  var totalPrice = cart.setTotalPrice();
  assert.equal(totalPrice, 50);
});

test("add() add an item to the cart service", function (assert) {
  var cart = this.subject();
  cart.add({id: 1, productName: "cart test" });
  cart.add({id: 2, productName: "cart test 2" });
  var items = cart.items;
  assert.equal(items.length, 2);
});

test("removeAll() remove all items from the cart service", function (assert) {
  var cart = this.subject();
  cart.items = [{id: 1, productName: "cart test" }, {id: 2, productName: "cart test 2" }];
  cart.removeAll();
  assert.equal(cart.items.length, 0);
});
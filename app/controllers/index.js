import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service('shoppingCart'),
  autocomplete: function () {
    console.log('binding stuff');
    var input = document.getElementById('pac-input');
    console.log(input);
  }.property('model.autocomplete'),
  actions: {
      addToCart(product) {
          console.log('was clicked');
          console.log(product);
          var productForCart = {
            id: product.id,
            productName: product.productName,
            imageUrl: product.imageUrl,
            price: product.Prices[0].price,
            quantity: 1
          };
          
          this.get('shoppingCart').add(productForCart);
          this.get('shoppingCart').setTotalPrice();
      },
      completeCheckOut() {
        console.log('complete checkout pressed');
      }
  }
});

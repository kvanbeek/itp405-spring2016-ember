import Ember from 'ember';

export default Ember.Controller.extend({
    shoppingCart: Ember.inject.service('shoppingCart'),
    actions: {
        addToCart(product) {
            console.log('was clicked');
            console.log(product);
            var productForCart = {
              productName: product.productName,
              imageUrl: product.imageUrl,
              price: product.Prices[0].price
            };
            this.get('shoppingCart').add(productForCart);
        },
        completeCheckOut() {
          console.log('complete checkout pressed');
        }
    }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service('shoppingCart'),
  api: Ember.inject.service('api'),
  estimate: Ember.inject.service('estimate'),
  error: null,
  actions: {
      removeFromCart(product) {
          this.get('shoppingCart').remove(product);
          this.get('shoppingCart').setTotalPrice();
          console.log(product);
          console.log('removing from cart');
      },
      sendOrder() {
        var self = this;
        var location = this.get('shoppingCart').getCoordinates();
        var address = this.get('shoppingCart').getAddress();
        var products = this.get('shoppingCart').getAll();
        var totalPrice = this.get('shoppingCart').getTotalPrice();
        
        // console.log(location);
       
        
        var data = {
          location: location,
          address: address,
          products: products,
          price: totalPrice,
        };
        
        console.log(data);
                        
        this.get('api').sendOrder(data).then(function (response) {
          console.log(response);
          if (response.success) {
            self.get('estimate').setEstimate(response);
            self.transitionToRoute('summary');
          } else {
            console.log(response);
            this.set('error', response.message);
          }
        });
        

      }
  }
});

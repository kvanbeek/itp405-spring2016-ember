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
          // console.log('testing');
          console.log(response);
          if (response.success) {
            self.get('estimate').setEstimate(response);
            self.transitionToRoute('summary');
          } else {
            // console.log('json response', response.responseJSON);
            console.log('json response: ');
            console.log(response.responseText);
            var errorMessage = response.message || response.responseJSON.message;
            self.set('error', errorMessage);
            console.log(errorMessage);
            setTimeout(function(){
                self.set('error', null);
            }, 10000);
          }
        }, function (error) {
            console.log('json response: ');
            var errorMessage = error.message || error.responseJSON.message;
            self.set('error', errorMessage);
            console.log(errorMessage);
            setTimeout(function(){
                self.set('error', null);
            }, 10000);
        });
        

      }
  }
});

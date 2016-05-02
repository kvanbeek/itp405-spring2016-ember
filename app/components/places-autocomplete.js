import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.service('shoppingCart'),
    didRender(){
        console.log('rendered');
        var self = this;
        var input = document.getElementById('pac-input');
        console.log(input);
        var autocomplete = new google.maps.places.Autocomplete(input);
        
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          var coordinates = {
              lat: parseFloat(place.geometry.location.lat().toFixed(6)),
              lng: parseFloat(place.geometry.location.lng().toFixed(6))
          }
          
          console.log(coordinates);
          console.log(place.formatted_address);
          self.get('shoppingCart').setAddress(place.formatted_address, coordinates);
        
        });
    }
});

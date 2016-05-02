import Ember from 'ember';

export default Ember.Service.extend({
    items: null,
    address: null,
    coordinates: null,
    totalPrice: null,
    init() {
        this._super();
        this.set('items', []);
    },
    add(item) {
        this.get('items').pushObject(item);
    },
    remove(item) {
        this.get('items').removeObject(item);
    },
    setAddress(address, coordinates) {
        this.set('address', address);
        this.set('coordinates', coordinates);
        
    },
    getAddress() {
      return this.get('address');  
    },
    getCoordinates() {
        return this.get('coordinates');
    },
    getAll() {
      return this.get('items');
    },
    getCount() {
        return this.get('items').length;
    },
    getTotalPrice() {
        return this.get('totalPrice');
    },
    removeAll() {
        this.set('items', []);
    },
    setTotalPrice() {
        var totalPrice = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            totalPrice = totalPrice + this.items[i].price;
        }
        this.set('totalPrice', totalPrice);
    }
    
});

import Ember from 'ember';

export default Ember.Component.extend({
    click() {
        console.log('was clicked');
    },
    actions: {
        addToCart(product) {
            console.log('was clicked');
            console.log(product);
        },

    }
});

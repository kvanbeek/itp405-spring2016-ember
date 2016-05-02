import Ember from 'ember';

export default Ember.Controller.extend({
    shoppingCart: Ember.inject.service('shoppingCart'),
    api: Ember.inject.service('api'),
    success: null,
    error: null,
    actions: {
        submitForm() {
            
            var self = this;

            var form = Ember.$("#myForm");
            var formData = new FormData(form);
            var path = Ember.$("#path").val();
            var quantity = Ember.$("#quantity").val();
            var description = Ember.$("#description").val();
            var prices = [{
                displayName: Ember.$("#displayName").val(),
                priceDisplay: Ember.$("#priceDisplay").val(),
                quantity: Ember.$("#priceQuantity").val(),
                quantityDisplay: Ember.$("#quantityDisplay").val(),
                weight: Ember.$("#weight").val()
            }];
            var fileInput = document.getElementById('productImage');
            var file = fileInput.files[0];
            
            formData.append('path', path);
            formData.append('quantity', quantity);
            formData.append('description', description);
            formData.append('prices', prices);
            formData.append('file', file);
            
            var xhr = new XMLHttpRequest();

            xhr.open('POST', 'https://api.buddyfarms.com/admin/product', true);
            xhr.setRequestHeader("Authorization", Ember.$.cookie('access_token'));
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // File(s) uploaded.
                    self.set('success', 'New product successfully added');
                    setTimeout(function(){
                        self.set('success', null);
                    }, 5000);
                } else {
                    self.set('error', xhr.message);
                    setTimeout(function(){
                        self.set('error', null);
                    }, 5000);
                }
            };
            
            xhr.send(formData);

        }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'update',
    model(params){
        console.log(params);
        var promise = Ember.$.getJSON(`https://api.buddyfarms.com/admin/products/${params.id}`);
        return promise.then(function(data){
            console.log(data[0]);
            return data[0];
        });
    }
});

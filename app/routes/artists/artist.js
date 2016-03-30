import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        console.log(params);
        return $.getJSON(` http://itp-api.herokuapp.com/artists/${params.id}`);
    }
});

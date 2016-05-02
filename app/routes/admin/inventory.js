import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return $.getJSON("https://api.buddyfarms.com/admin/inventory");
    }
});

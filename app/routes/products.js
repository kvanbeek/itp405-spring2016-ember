import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return $.getJSON("https://api.buddyfarms.com/products");
  }
});

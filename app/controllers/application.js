import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service('shoppingCart'),
  user: Ember.inject.service('user'),
  api: Ember.inject.service('api'),
  actions: {
    logout() {
      this.get('api').logout();
      // console.log('logout works');
    }
  }
});

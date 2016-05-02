import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service('user'),
  loggedIn: 'testing',
  beforeModel: function() {
    var access_token = Ember.$.cookie('access_token');
    if (access_token) {
      console.log('an access token was found');
      Ember.$.ajaxSetup({
        headers: {
          'Authorization': access_token
        }
      });
      this.get('user').userLoggedIn();
    }
  },
});

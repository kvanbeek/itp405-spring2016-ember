import Ember from 'ember';

export default Ember.Controller.extend({
  api: Ember.inject.service('api'),
  actions: {
      login() {
         var self = this;
          console.log('login button pressed');
          var email = $("#username").val();
          var password = $("#password").val();
          var data = {
            email: email,
            password: password
          };

          this.get('api').login(email, password).then(function (response) {
            console.log('response from login: ', response);
            self.transitionToRoute('index');
          });

          



          // $.post("https://api.buddyfarms.com/auth/login", data, function(response) {
          //   console.log(response);
          // });
      }
  }
});

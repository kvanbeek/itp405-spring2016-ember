import Ember from 'ember';

export default Ember.Service.extend({
  user: Ember.inject.service('user'),
  token: null,
  login: function (email, password) {
    var self = this;
    var data = {
      email: email,
      password: password
    };
    var promise = Ember.$.post("https://api.buddyfarms.com/auth/login", data).then(
      function (data) {
        self.token = data.token;
        Ember.$.ajaxSetup({
          headers: {
            'Authorization': data.token
          }
        });

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        Ember.$.cookie("access_token", data.token, {expires: expireDate});
        self.get('user').userLoggedIn();
        console.log(data);
        return data;
      },
      function (error) {
        return {status: error.statusText, message: error.responseText};
      }
    );
    return Ember.RSVP.resolve(promise);
  },
  
  logout: function () {
    Ember.$.ajaxSetup({
      headers: {
        'Authorization': ''
      }
    });
    Ember.$.removeCookie("access_token");
    this.get('user').userLoggedOut();
  },

  sendOrder: function (data) {
    var url = "https://api.buddyfarms.com/order";
    // var url = "http://localhost:8000/order";
    var promise = Ember.$.post(url, data).then(
      function (data) {
        return data;
      },
      function (error) {
        // console.log(error);
        return error;
      }
    );
    return Ember.RSVP.resolve(promise);
  },
  
});
// this.submitOrder = function (data) {
    
//     var myUrl = 'https://api.buddyfarms.com/order';
//     // var myUrl = 'http://localhost:8000/order';

//     return $http.post(myUrl, data).then(function (response) {
//       return response;
//     }, function (error) {
//       console.log('error: ', error);
//       return error;
//     })
//   }
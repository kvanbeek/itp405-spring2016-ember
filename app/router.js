import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', { path: ':id' });
  });
  this.route('products');
  this.route('shoppingcart');
  this.route('login');
  this.route('summary');
  this.route('admin', function() {
    this.route('inventory', function() {
      this.route('inventory', { path: ':id'});
    });
    this.route('product');
  });
});

export default Router;

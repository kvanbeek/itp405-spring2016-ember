import Ember from 'ember';

export default Ember.Service.extend({
    activeUser: null,
    loggedIn: false,
    init() {
        this._super();
        this.set('activeUser', null);
    },
    userLoggedIn() {
        this.set('loggedIn', true);
    },
    getLoginStatus() {
        return this.get('loggedIn');
    },
    userLoggedOut() {
        this.set('loggedIn', false);
    }
});

import Ember from 'ember';

export default Ember.Service.extend({
    phoneNumber: null,
    time: null,
    init() {
        this._super();
    },
    setEstimate(response) {
        console.log('setting estimate', response);
        this.set('phoneNumber', response.phoneNumber);
        this.set('time', response.estimate);
    },
    getPhoneNumber() {
        return this.get('phoneNumber');
    },
    getTime() {
        return this.get('time');
    }
});

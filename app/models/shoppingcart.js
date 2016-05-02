import DS from 'ember-data';

export default DS.Model.extend({
  productName: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number')
});

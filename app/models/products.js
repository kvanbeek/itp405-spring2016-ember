import DS from 'ember-data';

export default DS.Model.extend({
  productName: DS.attr('string'),
  quantity: DS.attr('number'),
  imageUrl: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

});



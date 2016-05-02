import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('places-autocomplete', 'Integration | Component | places autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{places-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#places-autocomplete}}
      template block text
    {{/places-autocomplete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

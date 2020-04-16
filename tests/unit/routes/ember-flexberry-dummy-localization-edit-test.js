import { moduleFor, test } from 'ember-qunit';

moduleFor('route:ember-flexberry-dummy-localization-edit', 'Unit | Route | ember flexberry dummy localization edit', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:objectlistview-events',
    'service:appState',
    'service:colsConfigMenu',
    'service:detail-interaction'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

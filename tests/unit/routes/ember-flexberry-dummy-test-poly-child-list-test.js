import { moduleFor, test } from 'ember-qunit';

moduleFor('route:ember-flexberry-dummy-test-poly-child-list', 'Unit | Route | ember flexberry dummy test poly child list', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:objectlistviewEvents',
    'service:formLoadTimeTracker',
    'service:colsConfigMenu',
    'service:advLimit',
    'service:appState',
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

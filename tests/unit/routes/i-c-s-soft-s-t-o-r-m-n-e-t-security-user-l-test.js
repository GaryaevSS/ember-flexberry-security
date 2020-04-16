import { moduleFor, test } from 'ember-qunit';

moduleFor('route:i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l', 'Unit | Route | i c s soft s t o r m n e t security user l', {
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

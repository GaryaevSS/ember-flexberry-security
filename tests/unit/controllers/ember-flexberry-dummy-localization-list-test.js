import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:ember-flexberry-dummy-localization-list', 'Unit | Controller | ember flexberry dummy localization list', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'controller:colsconfig-dialog',
    'service:user-settings',
    'service:objectlistview-events'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

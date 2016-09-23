import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization-offline', 'Unit | Serializer | i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization-offline', {
  needs: [
    'serializer:i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization-offline',
  ],
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();
  assert.ok(serializedRecord);
});
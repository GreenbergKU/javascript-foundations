var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    var wizard = new Wizard({name: 'Wiz'});
    assert.equal(wizard.isRested, true);
    // create wizard
    // assert isRested returns true
  });
  

  it('should be able to cast spells', function() {
    var wizard = new Wizard({name: 'Wiz', bearded: false});
    assert.equal(wizard.incantation('magic bullet'), 'MAGIC BULLET');
  });
  
    // create wizard
    // assert wizard.cast() returns 'MAGIC BULLET'
  

  it('should only be able to cast 3 spells', function() {var wizard = new Wizard({name: 'Wiz', bearded: false});
 
  // if (wizard.spells < 3) {
  //   assert.equal(wizard.isRested, true);
  // } else {
  //   assert.equal(wizard.isRested, false);  
  //   assert.equal(wizard.cast(), 'I SHALL NOT CAST!')
  // }
  ////     or...
  assert.equal(wizard.isRested, true);
  wizard.cast();
  assert.equal(wizard.isRested, true);
  wizard.cast();
  assert.equal(wizard.isRested, true);
  wizard.cast();
  assert({isRested: false});  
  assert.equal(wizard.cast(), 'I SHALL NOT CAST!'); 
    // create wizard
    // assert isRested is true
    // cast()
    // assert isRested is true
    // cast()
    // assert isRested is true
    // cast()
    // assert isRested is false
    // assert cast() returns 'I SHALL NOT CAST!'
  });
});
  
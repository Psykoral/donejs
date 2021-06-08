import QUnit from 'steal-qunit';
import { ViewModel } from './contact';

// ViewModel unit tests
QUnit.module('~/pages/contact');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the flippy-contact component');
});

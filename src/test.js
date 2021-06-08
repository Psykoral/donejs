import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-template/models/test';

import '~/pages/home/home-test';

import '~/pages/contact/contact-test';

F.attach(QUnit);

QUnit.module('donejs-template functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-template main page shows up', function() {
  F('title').text('donejs-template', 'Title is set');
});

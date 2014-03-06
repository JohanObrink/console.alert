
'use strict';
var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon');
chai.use(require('sinon-chai'));

describe('console.alert', function () {
  beforeEach(function () {
    sinon.stub(console, 'log');

    require('../')();
  });
  afterEach(function () {
    console.log.restore();
  });

  it('logs', function () {
    console.alert('Hello World!');
    expect(console.log).calledOnce;

    var expected = [
      ' ████████████████████████████',
      ' ║                          ║',
      ' ║   The terminal says:     ║',
      ' ║       Hello World!       ║',
      ' ║                   ╔════╗ ║',
      ' ║                   ║ OK ║ ║',
      ' ║                   ╚════╝ ║',
      ' ╚══════════════════════════╝'
    ].join('\n');
    console.error(console.log.firstCall.args[0]);
    expect(console.log).calledWith(expected);
  });
});
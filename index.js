
'use strict';

var top = [
  ' ████████████████████████████',
  ' ║                          ║',
  ' ║   The terminal says:     ║'
].join('\n');
var bottom = [
  ' ║                   ╔════╗ ║',
  ' ║                   ║ OK ║ ║',
  ' ║                   ╚════╝ ║',
  ' ╚══════════════════════════╝'
].join('\n');
var innerWidth = 26;

function buildLine(txts) {
  return txts.reduce(function (total, txt) {
    var before = Math.floor((innerWidth - txt.length) / 2);
    var after = innerWidth - txt.length - before;
    var line = ' ║' + (new Array(before +1)).join(' ') + txt + (new Array(after +1)).join(' ') + '║';
    total.push(line);
    return total;
  }, []).join('\n');
}

function split(msg) {
  var result = [];
  result.push(msg);
  return result;
}

module.exports = function () {
  console.alert = function (msg) {
    var middle = buildLine(split(msg));
    console.log([top, middle, bottom].join('\n'));
  };
};
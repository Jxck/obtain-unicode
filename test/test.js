var obtainUnicode =  obtainUnicode || require('../obtain-unicode').obtainUnicode;

// tests
function assert(actual, expected) {
  console.log('.');
  console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}

(function example() {
  console.log(obtainUnicode('beer!🍻'));
  // [98, 101, 101, 114, 33, 127867]
  console.log(String.fromCodePoint(98, 101, 101, 114, 33, 127867));
  // "beer!🍻
})();

(function test() {
  [
    'aAzZ09',
    '~`!@',
    '#$%^&',
    '*()_+-=',
    '{}|[]:',
    ';"<>?,./',
    "'",
    '\\',
    'あ亞',
    '叱𠮟',
    '🍻',
    ''
  ].forEach(function(expected) {
    var actual = String.fromCodePoint.apply(null, obtainUnicode(expected));
    assert(actual, expected);
  });
})();

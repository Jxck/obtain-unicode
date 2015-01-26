var ObtainUnicode =  ObtainUnicode || require('../obtain-unicode').ObtainUnicode;

// tests
function assert(actual, expected) {
  console.log('.');
  console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}

(function test() {
  [ "aAzZ09",
     "~`!@",
     "#$%^&",
     "*()_+-=",
     "{}|[]\:",
     ";'<>?,./'",
     "\"",
     "あ亞",
     "叱𠮟",
     "🍻",
     ""
  ].forEach(function(expected) {
    var actual = String.fromCodePoint.apply(null, ObtainUnicode(expected));
    assert(actual, expected);
  });
})();

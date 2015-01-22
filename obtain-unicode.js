// http://www.w3.org/TR/WebIDL/#dfn-obtain-unicode
module.exports = function ObtainUnicode(domstring) {

  // following algorithm defines a way to convert a DOMString to a sequence of Unicode characters:

  // 1. Let S be the DOMString value.
  var S = (new String(domstring)).toString();

  // 2. Let n be the length of S.
  var n = S.length;

  // 3. Initialize i to 0.
  var i = 0;

  // 4. Initialize U to be an empty sequence of Unicode characters.
  var U = [];

  // 5. While i < n:
  while(i < n) {
    // 5-1. Let c be the code unit in S at index i.
    var c = S.charCodeAt(i);

    // 5-2. Depending on the value of c:

    // c < 0xD800 or c > 0xDFFF
    if (c < 0xD800 || c > 0xDFFF) {
      // Append to U the Unicode character with code point c.
      U.push(c);
    }

    // 0xDC00 ≤ c ≤ 0xDFFF
    else if (0xDC00 <= c && c <= 0xDFF) {
      // Append to U a U+FFFD REPLACEMENT CHARACTER.
      U.push(0xFFFD);
    }

    // 0xD800 ≤ c ≤ 0xDBFF
    else if (0xD800 <= c && c <= 0xDBFF) {
      // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT CHARACTER.
      if (i === n - 1) {
        U.push(0xFFFD);
      }
      // 2. Otherwise, i < n−1:
      else if (i < n - 1) {
        // 1. Let d be the code unit in S at index i+1.
        var d = S.charCodeAt(i + 1);

        // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
        if (0xDC00 <= d && d <= 0xDFFF) {
          // 1. Let a be c & 0x3FF.
          var a = c & 0x3FF;

          // 2. Let b be d & 0x3FF.
          var b = d & 0x3FF;

          // 3. Append to U the Unicode character with code point 2^16+2^10*a+b.
          U.push(65536 + (1024 * a) + b);

          // 4. Set i to i+1.
          i = i + 1;
        }
        // 3. Otherwise, d < 0xDC00 or d > 0xDFFF.
        else if (d < 0xDC00 || d > 0xDFFF) {
          // Append to U a U+FFFD REPLACEMENT CHARACTER.
          U.push(0xFFFD);
        }
      }
    }

    // 3. Set i to i+1.
    i = i + 1;
  }

  return U;
}

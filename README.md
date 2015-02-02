# Isomorphic Unicode Codepoint to/from String converter

## about

implementation of Obtain Unicode Algorithm from DOMString at
http://www.w3.org/TR/WebIDL/#dfn-obtain-unicode

also polyfill of String.fromCodePoint() for convert codepoints to string.
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#Polyfill


## install

```sh
$ npm install obtain-unicode
```

## usage

works in node and browser.
Isomorphic !! no Browserify.

```typescript
var obtainUnicode =  obtainUnicode || require('../obtain-unicode').obtainUnicode;

console.log(obtainUnicode('beer!🍻'));
// [98, 101, 101, 114, 33, 127867]
console.log(String.fromCodePoint(98, 101, 101, 114, 33, 127867));
// "beer!🍻
```

## test

```sh
$ npm test
```

and also open test/index.html in your browser and see console.

## for TypeScript

use [obtain-unicode.d.ts](./obtain-unicode.d.ts)

and also add this type declare to your code.
(because d.ts can't include this)

```typescript
// polyfill for String.fromCodePoint
declare var String: {
  new (value?: any): String;
  (value?: any): string;
  prototype: String;
  fromCharCode(...codes: number[]): string;
  /**
   * Pollyfill of String.fromCodePoint
   */
  fromCodePoint(...codePoints: number[]): string;
}
```

## License

The MIT License (MIT)
Copyright (c) 2015 Jxck

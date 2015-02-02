declare module ObtainUnicode {
  function obtainUnicode(domstring: string): number[];
}

declare module 'obtain-unicode' {
  export = ObtainUnicode;
}

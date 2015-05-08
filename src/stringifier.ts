/// <reference path='../typings/tsd.d.ts' />

import CircularJSON = require('circular-json');

export function stringify(obj :Object) :string {
  return CircularJSON.stringify(obj);
}

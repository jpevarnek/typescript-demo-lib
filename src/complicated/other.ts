/// <reference path='../../typings/tsd.d.ts' />
import _ = require('lodash');

export function getCoolMessage() {
  return _.camelCase('Hello world, you are awesome!');
}

/// <reference path='../../typings/tsd.d.ts' />
import util = require('./other');

class MessageGetter {
  getMessage = () => {
    return util.getCoolMessage();
  }
}

export = MessageGetter;

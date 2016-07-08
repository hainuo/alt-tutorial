var Alt = require('alt');
var alt = new Alt();
var chromeDebug = require('alt-utils/lib/chromeDebug');
Alt.debug('alt', alt);
chromeDebug(alt);
module.exports = alt;

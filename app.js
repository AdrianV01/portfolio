'use strict'
//constructor function pseudo-code, here will be parameters for different
//endeavors in my life. military, civilian, education, etc. the constructor parameters
// will include place, period, description, an associated image, and perhaps a link.
function lifeExcerpt (options) {
  this.timePeriod = options.timePeriod;
  this.place = options.place;
  this.summary = options.summary;
  this.image = options.image;
  this.externalLink = options.extenalLink;
}

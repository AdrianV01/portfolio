'use strict'
var instances = [];
var source = $("article-template").html();
var template = Handlebars.compile(source);
var context = 
//constructor function pseudo-code, here will be parameters for different
//endeavors in my life. military, civilian, education, etc. the constructor parameters
// will include place, period, description, an associated image, and perhaps a link.
function LifeExcerpt (options) {
  this.timePeriod = options.timePeriod;
  this.place = options.place;
  this.summary = options.summary;
  this.image = options.image;
  this.externalLink = options.externalLink;
}

LifeExcerpt.prototype.toHtml = function() {
  var $newExcerpt = $('article.berlioz').clone();
  $newExcerpt.find('img').attr('src', this.image);
  $newExcerpt.find('#summaryof').text(this.summary);
  $newExcerpt.find('#locationof').text(this.place);
  $newExcerpt.find('a').attr('href', this.externalLink);
  $newExcerpt.find('#time').text(this.timePeriod);
  $newExcerpt.removeClass('berlioz');
  return $newExcerpt;
}

dataArray.forEach(function(data){
  instances.push(new LifeExcerpt(data));
});

instances.forEach(function(data){
  $('#beethoven').append(data.toHtml());
});

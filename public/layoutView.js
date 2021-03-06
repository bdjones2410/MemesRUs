var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MemeCollection = require('./collection');
var MemeCollectionView = require('./collectionView');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');

module.exports = Backbone.View.extend({
   el: '#layout',

   initialize: function(){
     var self = this;
     var headerHTML = new HeaderView();
     var footerHTML = new FooterView();
     var memeCollection = new MemeCollection();
     memeCollection.fetch().then(function (){
       self.$el.find('header').html(headerHTML.render().el);
       new MemeCollectionView({collection: memeCollection});
       self.$el.find('footer').html(footerHTML.render().el);
     });
   },
 });

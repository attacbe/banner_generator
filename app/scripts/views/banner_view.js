AttacBannerGenerator2.BannerView = Ember.View.extend({
  redrawText: function () {
    var that = this;
    Ember.run.schedule('afterRender', function () {
      that.get('controller').send('updateDownloadTarget');
    });

  }.observes('didInsertElement', 'controller.title', 'controller.date', 'controller.speakers', 'controller.bannerType', 'controller.titleSize')

});


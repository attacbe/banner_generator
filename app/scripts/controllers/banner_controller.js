AttacBannerGenerator2.BannerController = Em.Controller.extend({
  title: 'Les coulisses de nos démocraties',
  date: 'Le mardi 25 juin 2014, Attac Bruxelles présente:',
  bannerTypes: ['formation', 'actu'],
  bannerType: 'formation',
  speakers: 'Bruno Poncelet, formateur au CEPAG & animateur de la plateforme No Transat !',
  newsletterTitleSize: '30',
  fbTitleSize: '35',

  newsletterComputedTitleSize: function () {
    return 'font-size: ' + this.get('newsletterTitleSize') + 'px;'
  }.property('newsletterTitleSize'),

  facebookComputedTitleSize: function () {
    return 'font-size: ' + this.get('fbTitleSize') + 'px;'
  }.property('fbTitleSize'),

  actions: {
    updateDownloadTarget: function (target) {
      this.send('transform', 'facebook');
      this.send('transform', 'newsletter');
    },

    transform: function (type) {
      var el = $('.banner-'+type);

      html2canvas(el, {
        onrendered: function(canvas) {
          var img    = canvas.toDataURL("image/png");
          var link = $('.download-'+type);
          link.attr('href', img);
          link.attr('download', 'download.png');
        }
      });
    }
  }
});

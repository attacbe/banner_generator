!function(){window.AttacBannerGenerator2=Ember.Application.create()}(),function(){AttacBannerGenerator2.BannerController=Em.Controller.extend({title:"Les coulisses de nos démocraties",date:"Le mardi 25 juin 2014, Attac Bruxelles présente:",bannerTypes:["formation","actu"],bannerType:"formation",speakers:"Bruno Poncelet, formateur au CEPAG & animateur de la plateforme No Transat !",newsletterTitleSize:"30",fbTitleSize:"35",newsletterComputedTitleSize:function(){return"font-size: "+this.get("newsletterTitleSize")+"px;"}.property("newsletterTitleSize"),facebookComputedTitleSize:function(){return"font-size: "+this.get("fbTitleSize")+"px;"}.property("fbTitleSize"),actions:{updateDownloadTarget:function(){this.send("transform","facebook"),this.send("transform","newsletter")},transform:function(a){var b=$(".banner-"+a);html2canvas(b,{onrendered:function(b){var c=b.toDataURL("image/png"),d=$(".download-"+a);d.attr("href",c),d.attr("download","download.png")}})}}})}(),function(){AttacBannerGenerator2.ApplicationAdapter=DS.FixtureAdapter}(),function(){AttacBannerGenerator2.BannerView=Ember.View.extend({redrawText:function(){var a=this;Ember.run.schedule("afterRender",function(){a.get("controller").send("updateDownloadTarget")})}.observes("didInsertElement","controller.title","controller.date","controller.speakers","controller.bannerType","controller.titleSize")})}(),function(){AttacBannerGenerator2.RangeInput=Ember.View.extend({tagName:"input",attributeBindings:["type","min","max","step","value","name"],type:"range",min:0,max:60,step:1,value:30,change:function(a){this.set("value",a.target.value)}})}(),function(){AttacBannerGenerator2.Router.map(function(){this.route("banner",{path:"/"})})}();
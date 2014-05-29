AttacBannerGenerator2.RangeInput = Ember.View.extend({
  tagName: "input",
  attributeBindings: ["type", "min", "max", "step", "value", "name"],
  type: "range",
  min: 0,
  max: 60,
  step: 1,
  value: 30,
  change: function (event) {
    this.set("value", event.target.value);
  }
});
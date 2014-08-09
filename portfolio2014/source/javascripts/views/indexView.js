var app = app || {};

app.indexView = Backbone.View.extend({
  el: 'content',

  events: {

  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var indexView = this.template();
    this.$el.html(indexView);
  }
})

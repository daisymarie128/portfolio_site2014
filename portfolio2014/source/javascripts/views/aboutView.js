var app = app || {};

app.AboutView = Backbone.View.extend({
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
    var aboutView = _.template(app.templates.aboutView);
    this.$el.html(aboutView);
  }
})

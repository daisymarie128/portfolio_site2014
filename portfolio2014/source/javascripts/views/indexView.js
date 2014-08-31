var app = app || {};

app.IndexView = Backbone.View.extend({
  tagName: 'div',

  events: {

  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    // var indexView = this.template();
    // this.$el.html(indexView);

    var indexView = app.templates.indexView;
    // _.template(app.templates.aboutView);
    this.$el.html(indexView);
    $('#content').html(this.el);
    console.log('rendering index')
  }
})

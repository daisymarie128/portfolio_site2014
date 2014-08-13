var app = app || {};

app.AboutView = Backbone.View.extend({
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
    var aboutView = app.templates.aboutView;
    // _.template(app.templates.aboutView);
    this.$el.html(aboutView);
    $('#content').html(this.el);
    console.log('rendering')
    // var aboutView = Handlebars.compile(app.templates.aboutView);
    // this.$el.html( aboutView );
    // this.$el.attr('id', 'airplane-view');
    // $('#content').html(this.el);
  }
})

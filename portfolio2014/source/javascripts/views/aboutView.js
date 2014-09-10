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
    $('body').css({'background-color': '#FFF'})
    $('.nav-bar a').css({'color': '#000'})
    var aboutView = app.templates.aboutView;
    // _.template(app.templates.aboutView);
    this.$el.html(aboutView);
    $('#content').html(this.el);
    console.log('rendering')

  }

  });

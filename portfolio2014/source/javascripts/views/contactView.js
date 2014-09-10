var app = app || {};

app.ContactView = Backbone.View.extend({
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
    $('.nav-bar a').css({'color': '#000'})
    var contactView = app.templates.contactView;
    // _.template(app.templates.aboutView);
    this.$el.html(contactView);
    $('#content').html(this.el);
    console.log('rendering contact')
  }
})
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
    console.log('rendering index');
    $('body').css({'background-color': '#7BC794'});
    $('.nav-bar a').css({'color': '#FFF'})

    $('.idiot').fadeIn(1300);
    $('.bannana').animate({
    top:"9%",
    },3500, "linear", function() {
    });

    $('.developer').fadeIn(1000);
    $('.animator').fadeIn(1100);
    $('.designer').fadeIn(1200);
    $('.idiot').fadeIn(1300);
  }
})

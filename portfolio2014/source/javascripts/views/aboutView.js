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
    var aboutView = app.templates.aboutView;
    // _.template(app.templates.aboutView);
    this.$el.html(aboutView);
    $('#content').html(this.el);
    console.log('rendering')
    // $('#quick-facts').animate({
    // 'margin-left':"50%",
    // },500, "linear", function() {
    // });

    // $('#boring-facts').animate({
    // 'margin-left':"0%",
    // },500, "linear", function() {
    // });

    // $('#contact').animate({
    // 'margin-left':"50%",
    // },500, "linear", function() {
    // });
    // var aboutView = Handlebars.compile(app.templates.aboutView);
    // this.$el.html( aboutView );
    // this.$el.attr('id', 'airplane-view');
    // $('#content').html(this.el);
    ///////// SVG SCROLL ANIMATION /////////
  }

      //draw the line

  });

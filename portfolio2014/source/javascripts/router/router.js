var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'about': 'aboutView',
    'portfolio': 'portfolioView',
    'portfolio/project': 'projectView'
  },

  initialize: function () {

  },

  index: function () {
    // if (app.currentView) {
    //   app.currentView.remove();
    // }
    // var appView = new app.AppView()
    // appView.render();
  },

  aboutView: function () {
    var aboutView = new app.AboutView();
    aboutView.render();
  }
});



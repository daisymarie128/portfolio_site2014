var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'about': 'aboutView',
    'portfolio': 'portfolioView',
    'portfolio/project': 'projectView'
  },

  initialize: function () {
    app.posts = new app.Posts([
      new app.Project({
        id: 1, title: 'Project 1',
        content: 'Backbone is hell',
        image: [
          'one',
          'two'
        ]),
       new app.Project({
        id: 2, title: 'Project 2',
        content: 'Backbone is hell',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ])

    ]);
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
  },

  portfolioView: function () {
    var portfolioView = new app.PortfolioView();
    portfolioView.render();
  }
});



var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'indexView',
    'about': 'aboutView',
    'portfolio': 'portfolioView',
    'project/:id': 'projectView'
  },

  initialize: function () {
    app.projects = new app.Projects([
      new app.Project({
        id: 1,
        filterTags: 'three-js',
        title: 'Project 1',
        content: 'Backbone is hell',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ]
      }),
       new app.Project({
        id: 2,
        title: 'Project 2',
        filterTags: 'web-development',
        content: 'Backbone is hell',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ]

      })
    ])
  },
  indexView: function () {
    // if (app.currentView) {
    //   app.currentView.remove();
    // }
    var indexView = new app.IndexView()
    indexView.render();
  },

  aboutView: function () {
    var aboutView = new app.AboutView();
    aboutView.render();
  },

  portfolioView: function () {
    var portfolioView = new app.PortfolioView({ collection: app.projects });
    portfolioView.render();
  },

  projectView: function (id) {
    var project = app.projects.get(id)
    var projectView = new app.ProjectView({model: projects });
    projectView.render();
  }
});



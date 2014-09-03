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
        filterTags: 'rails programming',
        title: 'Photocrapper',
        content: 'Photocrapper was designed as a simple app where you could upload images of your choice where you could follow friends and view their images. The goal with this app was to be a learning experience for me to understand and enhance my programming skills. I aimed to understand how to create a simple app like instagram without the cool filters. This app was created as my first project and was a great learning experience, I intend on taking this further and adding some filters and sharing features.',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ],
        projectLink: '',
        contributors: ''
      }),
       new app.Project({
        id: 2,
        title: 'Threedee',
        filterTags: 'web-development',
        content: 'Backbone is hell',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/',
        contributors: ''
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
    var projectView = new app.ProjectView({model: project });
    projectView.render();
  }
});



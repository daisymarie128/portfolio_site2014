$(document).ready(function () {

  app.templates = {
    indexView: $('#index-template').html(),
    aboutView: $('#about-template').html(),
    portfolioView: $('#portfolio-template').html(),
    projectModelView: $('#project-model-template').html(),
    projectView: $('#project-template').html(),
    skillsModelView: $('#skills-model-template').html(),
    skillsView: $('#skills-template').html(),
    skillView: $('#skill-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
});




$(document).ready(function () {

  app.templates = {
    indexView: $('#index-template').html(),
    aboutView: $('#about-template').html(),
    portfolioView: $('#portfolio-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
});

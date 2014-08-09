var app = app || {};

app.Portfolio = Backbone.Model.extend({
  urlRoot: '/portfolio',
  defaults: {
    projects: [],
    projectInformation: 'content goes here'
  }
});
var app = app || {};

app.Projects = Backbone.Collection.extend({
  model: app.Project,
  url: '/#{projectName}'
});


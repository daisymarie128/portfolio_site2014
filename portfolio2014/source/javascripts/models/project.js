var app = app || {};

app.Project = Backbone.Model.extend({
  urlRoot: '/project',
  defaults: {
    title: 'project name',
    content: 'all my dumb content should do here',
    image: [],
    video: []
  }
});
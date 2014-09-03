var app = app || {};

app.Project = Backbone.Model.extend({
  urlRoot: '/project',
  defaults: {
    id: 0,
    filterTags: "tags",
    title: 'project name',
    content: 'all my dumb content should do here',
    featureImage: '',
    image: [],
    video: []
  }
});
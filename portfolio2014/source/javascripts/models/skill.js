var app = app || {};

app.Skill = Backbone.Model.extend({
  urlRoot: '/skill',
  defaults: {
    id: 0,
    filterTags: "tags",
    title: 'project name',
    content: 'all my dumb content should do here',
    featureImage: '',
    image: [],
    video: [],
    projectLink: ''
  }
});
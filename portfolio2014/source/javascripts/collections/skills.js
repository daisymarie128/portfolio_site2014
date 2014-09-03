var app = app || {};

app.Skills = Backbone.Collection.extend({
  model: app.Skill,
  url: '/skills'
});


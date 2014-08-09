var app = app || {};

app.About = Backbone.Model.extend({
  urlRoot: '/about',
  defaults: {
    content: 'all my dumb content should do here',
    image: '/image/link'
  }
});

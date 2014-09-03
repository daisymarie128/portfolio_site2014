var app = app || {};

app.ProjectView = Backbone.View.extend({
  tagName: 'div',

  events: {
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var list = this;
    var projectView = Handlebars.compile(app.templates.projectView);
    var copy = projectView( this.model.toJSON() );
    list.$el.html( projectView( this.model.toJSON() ) );
      list.$el.attr('id', 'pub-challenges-view');
      $('#content').append( list.el );
      console.log(projectView( this.model.toJSON() ))
      console.log('hellll')
  }
});
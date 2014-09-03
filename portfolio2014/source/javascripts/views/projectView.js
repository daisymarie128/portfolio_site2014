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
    app.projects.fetch({data: {project_id: this.model.get('id')}}).done(function(){
      var projectView = Handlebars.compile(app.templates.projectView);
      console.log(list.$el)
      list.$el.html( projectView({projects: app.project.toJSON()}) );
      list.$el.attr('id', 'single-project-view');
      $('#content').append( list.el );
      })
  }
});
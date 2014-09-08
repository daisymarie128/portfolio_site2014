var app = app || {};

app.ProjectModelView = Backbone.View.extend({
  tagName: 'div',
  className: 'project-item',
  events: {
    'click .view-project': 'viewProject'
  },

  initialize: function () {

   },

  render: function () {
    console.log(this.model)
    var template = Handlebars.compile( app.templates.projectModelView )
    this.$el.addClass( this.model.get('filterTags') )
    this.$el.html( template( this.model.toJSON() ) )
    return this.$el
  },

  viewProject: function () {
    app.router.navigate("project/" + this.model.get('id'), true)
  }
});
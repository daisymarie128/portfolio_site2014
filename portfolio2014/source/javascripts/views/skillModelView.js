var app = app || {};

app.SkillModelView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'click .view-skill': 'viewSkill'
  },

  initialize: function () {

   },

  render: function () {
    console.log(this.model)
    var template = Handlebars.compile( app.templates.skillModelView )
    this.$el.html( template( this.model.toJSON() ) )
    return this.$el
  },

  viewSkill: function () {
    app.router.navigate("skill/" + this.model.get('id'), true)
  }
});
var app = app || {};

app.SkillView = Backbone.View.extend({
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
    $('.nav-bar a').css({'color': '#000'})
    var list = this;
    var skillView = Handlebars.compile(app.templates.skillView);
    var copy = skillView( this.model.toJSON() );
    list.$el.html( skillView( this.model.toJSON() ) );
      list.$el.attr('id', 'skill-view');
      $('#content').append( list.el );
      console.log(skillView( this.model.toJSON() ))
      console.log('hellll')
  }
});
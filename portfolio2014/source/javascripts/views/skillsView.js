var app = app || {};

app.SkillsView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click #filters button': 'filterButton'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var list = this
    console.log(list)
    var skillsView = Handlebars.compile(app.templates.skillsView);
    console.log(list)
    this.$el.html( skillsView );
    var ul = list.$el.find('#skills')

    app.skills.each(function(skill){
      var skillView = new app.SkillModelView( {model: skill} );
      ul.append( skillView.render() );
    })

    this.$el.attr('id', 'all-skill-view');
    $('#container').append( this.el );
  }
});
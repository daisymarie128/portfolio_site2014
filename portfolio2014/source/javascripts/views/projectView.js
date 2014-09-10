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
  //   var list = this;
  //   console.log('hello')
  //   app.projects.fetch({data: { id: this.model.get('id')}}).done(function(){
  //     var projectView = Handlebars.compile(app.templates.projectView);
  //     console.log(list.$el)
  //     console.log('i never get here <---')
  //     list.$el.html( projectView({projects: app.project.toJSON()}) );
  //     list.$el.attr('id', 'single-project-view');
  //     $('#content').append( list.el );
  //     })
  // }
    // var projectView = Handlebars.compile(app.templates.projectView);
    // console.log(app.templates.projectView)
    // this.$el.html(projectView);
    // $('#content').html(this.el);
    // console.log('rendering')

    // var projectView = Handlebars.compile(app.templates.projectView);
    // var copy = projectView( this.model.toJSON() );
    // this.$el.append( copy );
    // console.log(copy)
    // console.log(this.$el)
    // console.log(this.model.toJSON())
    $('body').css({'background-color': '#FFF'})
    $('.nav-bar a').css({'color': '#000'})
    var list = this;
    // console.log(list.$el)
    var projectView = Handlebars.compile(app.templates.projectView);
    var copy = projectView( this.model.toJSON() );
    list.$el.html( projectView( this.model.toJSON() ) );
      list.$el.attr('id', 'project-view');
      $('#content').append( list.el );
      // console.log(projectView( this.model.toJSON() ))
      // console.log('hellll')

  }
});
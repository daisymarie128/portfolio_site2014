var app = app || {};

app.PortfolioView = Backbone.View.extend({
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
    var portfolioView = Handlebars.compile(app.templates.portfolioView);
    console.log(list)
    this.$el.html( portfolioView );
    var ul = list.$el.find('#portfolio')

    app.projects.each(function(project){
      var projectView = new app.ProjectModelView( {model: project} );
      ul.append( projectView.render() );
    })

    this.$el.attr('id', 'all-project-view');
    $('#container').append( this.el );
  },

  filterButton: function (e) {
    // init Isotope
    var $container = $('#image-holder').isotope({
      itemSelector: '.project-item',
      layoutMode: 'fitRows'
    });

    var $src = $(e.currentTarget)
    var filterValue = $src.attr('data-filter');

    $container.isotope({ filter: filterValue });

  }
});
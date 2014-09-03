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
    // console.log('portfolio view is loading')
    // var portfolioView = app.templates.portfolioView;
    // // _.template(app.templates.aboutView);
    // this.$el.html(portfolioView);
    // console.log('rendering portfolio view')
    // $('#content').html(this.el);

    // this is the new code for the project model i hope this works
    var list = this
    console.log(list)
    var portfolioView = Handlebars.compile(app.templates.portfolioView);
    console.log(list)
    this.$el.html( portfolioView );
    var ul = list.$el.find('#portfolio')
    app.projects.each(function(project){
      // console.log("this is supposed to be a project?" + project);
      var projectView = new app.ProjectModelView( {model: project} );
      ul.append( projectView.render() );
      // console.log(ul)
    })
    this.$el.attr('id', 'all-project-view');
    $('#container').append( this.el );
    // console.log(this.el)

    // // $('#portfolio-content').isotope()
    // var $container = $('#image-holder');
    // // init
    // $container.isotope({
    //   // options
    //   itemSelector: '.project-item',
    //   layoutMode: 'fitRows'
    // });
  },

  filterButton: function (e) {
    // init Isotope

    var $container = $('#image-holder').isotope({
      itemSelector: '.project-item',
      layoutMode: 'fitRows'
    });
    // console.log("container ", $container)
    // filter items on button click
    // $('#filters').on( 'click', 'button', function() {
      var $src = $(e.currentTarget)
      var filterValue = $src.attr('data-filter');
      // console.log("ello", e.currentTarget)
      // console.log("filter value " + filterValue);
      $container.isotope({ filter: filterValue });
    // });
    // console.log('its reaching the filtering function');
  }
});
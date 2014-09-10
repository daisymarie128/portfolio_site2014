var app = app || {};

app.PortfolioView = Backbone.View.extend({
  tagName: 'ul',

  events: {
    'click #filters button': 'filterButton',
    'load window': 'finishedLoading'
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
    $('body').css({'background-color': '#FFF'})
    $('.nav-bar a').css({'color': '#000'})

    // this is the new code for the project model i hope this works
    var list = this
    // console.log(list)
    var portfolioView = Handlebars.compile(app.templates.portfolioView);
    // console.log(list)
    this.$el.html( portfolioView );
    console.log(this.$el)
    var ul = list.$el.find('#portfolio')
    console.log('rendering')

    app.projects.each(function(project){
      var projectView = new app.ProjectModelView( {model: project} );
      ul.append( projectView.render() );
    })


    this.$el.attr('id', 'all-project-view');
    console.log(this.el)
    // debugger;
    // $('#portfolio-content').isotope()
    // console.log($('#image-holder'))
    var $container = $('#image-holder').isotope({
    // init
      // options
      itemSelector: '.project-item',
      layoutMode: 'fitRows'

    });

    // $container.imagesLoaded(function(){
    //   $container.isotope('layout')
    // })
    $('#content').append( this.el );
    // console.log($container.isotope().filter)
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
      console.log("filter value " + filterValue);
      $container.isotope({ filter: filterValue });
    // });
    // console.log('its reaching the filtering function');
  },
  after: function(e) {
    console.log('string')
    console.log(e);
  }
});
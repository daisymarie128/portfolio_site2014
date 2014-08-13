var app = app || {};

app.PortfolioView = Backbone.View.extend({
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
    var portfolioView = app.templates.portfolioView;
    // _.template(app.templates.aboutView);
    this.$el.html(portfolioView);
    console.log('rendering')
    $('#content').html(this.el);
    var $container = this.$el.find('#portfolio-content');
    // init
    $container.isotope({
      // options
      itemSelector: '.project',
      layoutMode: 'fitRows'
    });
  },

  filterButton: function () {
    // init Isotope
    var $container = $('#container').isotope({
      // options
    });
    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
  }
});
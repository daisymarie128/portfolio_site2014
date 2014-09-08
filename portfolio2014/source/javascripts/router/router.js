var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'indexView',
    'about': 'aboutView',
    'portfolio': 'portfolioView',
    'project/:id': 'projectView',
    'skills': 'skillsView',
    'skill/:id': 'skillView',
    'contact': 'contactView'
  },

  initialize: function () {
    app.projects = new app.Projects([
      new app.Project({
        id: 1,
        filterTags: 'rails web-development',
        title: 'Photocrapper',
        content: 'Photocrapper was designed as a simple app where you could upload images of your choice where you could follow friends and view their images. The goal with this app was to be a learning experience for me to understand and enhance my programming skills. I aimed to understand how to create a simple app like instagram without the cool filters. This app was created as my first project and was a great learning experience, I intend on taking this further and adding some filters and sharing features.',
        featureImage: 'images/photocrapper-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        projectLink: 'http://photocrapper.herokuapp.com/'
      }),
       new app.Project({
        id: 2,
        title: 'Threedee',
        filterTags: 'web-development rails three-js javascript',
        content: 'This web application was created as part of a team, who all had the same interests of creating a 3D audio visualiser. We used the web Audio API and Three.js to get this app working. I worked on the visual side of the project which meant most of my work was done in javascript using Three.js. I loved building this app as it was something I was very interested in and it was also a great way of exploring new frameworks. As for the future of this project I plan to continue to create more visualiser and experiment with different and interesting things you can do with Three.js.',
        featureImage: 'images/threedee-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      }),
       new app.Project({
        id: 3,
        title: 'PubCrawl',
        filterTags: 'web-development javascript backbone phone-gap design rails ux',
        content: 'PubCrawl is an app designed to be a social game. It allows users to create accounts, follow friends and pubs, view challenges and try to complete them to earn points and badges. This app not only provides a social fun experience for users but can also benifit pubs and clubs to promote their bussiness and reel in patrons. This app started as a project for a course but has developed into a start up which I am continuosly working on and adding new features to until its ready to be released to the public. I started working on this project alone and have since recruited the amazing developer Larlyn Tanasap. We have built this app using Ruby on Rails, Backbone, Haml, Sass, google maps API and PhoneGap. ',
        featureImage: 'images/pubcrawl-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      }),
       new app.Project({
        id: 4,
        title: 'Specimen',
        filterTags: 'animation3d design',
        content: 'BRIEF Billy Blue college of design holds a unique exhibition for each graduating class.PROCESS. Billy Blue college of design holds a unique exhibition for each graduating class. The project consisted of a few different teams of people including communication, branded, spacial, digital and a team of lecturers. As soon as the project started it was all in. First off though a brand and theme had to be chosen and after a numerous amount of thinking, designing and re-thinking the team had decided on ‘Specimen’ as our theme. It was now time to get down to the nitty gritty and start designing off this theme which was great. It alowed me to explore new programs and develop my digital skills. I played a makor role in the digital team creating animations which were used for pod projections, video elements on the website, promo teasers for the event and also used for promotional posters. Working on this project was a blast and also a great development of my skills.',
        featureImage: 'images/specimen-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      }),
       new app.Project({
        id: 5,
        title: 'Threedee',
        filterTags: 'web-development three-js javascript',
        content: 'Backbone is hell',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      }),
       new app.Project({
        id: 6,
        title: "Muay Thai Store Sydney",
        filterTags: 'design illustrator',
        content: 'Backbone is hell',
        featureImage: 'images/muaythaistore-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      }),
       new app.Project({
        id: 7,
        title: "Mountains",
        filterTags: 'design illustrator ux',
        content: 'Backbone is hell',
        featureImage: 'images/mountains-insitu-01.png',
        image: [
          'one',
          'two'
        ],
        video: [
          'one'
        ],
        projectLink: 'http://tadx-threedee.herokuapp.com/'
      })
    ]),


    app.skills = new app.Skills([
      new app.Skill({
        id: 1,
        filterTags: '',
        title: 'Photocrapper',
        content: 'Photocrapper was designed as a simple app where you could upload images of your choice where you could follow friends and view their images. The goal with this app was to be a learning experience for me to understand and enhance my programming skills. I aimed to understand how to create a simple app like instagram without the cool filters. This app was created as my first project and was a great learning experience, I intend on taking this further and adding some filters and sharing features.',
        featureImage: 'images/specimen3.jpg',
        image: [
          'one',
          'two'
        ],
        projectLink: 'http://photocrapper.herokuapp.com/'
      }),
      new app.Skill({
        id: 2,
        programsUSed: 'AutoDesk Maya, After Effects',
        title: 'Ocean',
        content: 'This was a test to create a realistic ocean, I had to lower the quality of the video and only render a few seconds due to computer performance reasons.',
        featureImage: 'images/specimen3.jpg',
        video: '//player.vimeo.com/video/105139261?color=be254d',
        projectLink: 'http://photocrapper.herokuapp.com/'
      })
    ])
  },
  indexView: function () {
    // if (app.currentView) {
    //   app.currentView.remove();
    // }
    var indexView = new app.IndexView()
    indexView.render();
  },

  aboutView: function () {
    var aboutView = new app.AboutView();
    aboutView.render();
  },

  portfolioView: function () {
    var portfolioView = new app.PortfolioView({ collection: app.projects });
    portfolioView.render();

  },

  projectView: function (id) {
    var project = app.projects.get(id)
    var projectView = new app.ProjectView({model: project });
    projectView.render();
  },

  skillsView: function () {
    var skillsView = new app.SkillsView({ collection: app.skills });
    skillsView.render();
  },

  skillView: function (id) {
    var skill = app.skills.get(id)
    var skillView = new app.SkillView({model: skill });
    skillView.render();
  }
});



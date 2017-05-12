//Router Configuration
Router.configure({
  layoutTemplate:   'layout',
  loadingTemplate:  'loading',
  // notFoundTemplate: 'notFound',
});

// Controller that will be requested in many normal routes
MainController = RouteController.extend({
  yieldTemplates: {
    header: { to: 'header' },
    footer:     { to: 'footer' },
  },
});

Router.route('/', {
  name:       'home',
  template:   'home',
  controller: MainController,
});

Router.route('/login', {
  name:       'login',
  template:   'login',
  controller: MainController,
});

Router.route('/registrar', {
  name:       'registrar',
  template:   'registrar',
  controller: MainController,
});

Router.route('/perfil', {
  name:       'perfil',
  template:   'perfil',
  controller: MainController,
  waitOn() {
    return [Meteor.subscribe('user')];
  }
});

Router.route('/equipe', {
  name:       'equipe',
  template:   'equipe',
  controller: MainController,
});

Router.route('/turmas/registrar/:id', {
  name:       'registrarPresenca',
  template:   'registrarPresenca',
  data() {
    // console.log(Turmas.findOne({_id: this.params.id}));
    return Turmas.findOne({_id: this.params.id});
  },
  waitOn() {
    return [Meteor.subscribe('user'), Meteor.subscribe('turma', this.params.id)];
  },
  controller: MainController,
});

var requireLogin = function () {
  if (!Meteor.user()) {
    // if(Meteor.loggingIn()){
    //   this.render('loading');
    // } else {
      this.render('login');
      this.render('header', {to: 'header'});
      this.render('footer', {to: 'footer'});
    // }
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {only: ['perfil']});


Router.onAfterAction(function(){
  var selector = '.nav a[href="/' + Router.current().route.getName() + '"]'; // the nav item for the active route (if any)
  if (Router.current().route.getName()=='home'){
    selector = '.nav a[href="/"]';
  }
  setTimeout(function(){
    $('.nav .active').removeClass('active'); // unhighlight any previously highlighted nav
    $(selector).parent().addClass('active'); // highlight the current nav (if it exists, many routes don't have a nav)
  }, 200);
}, {except: []});

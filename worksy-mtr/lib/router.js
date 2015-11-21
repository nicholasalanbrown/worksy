Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn(){
    return;
  }
});

Router.route('/', {
  name: 'home'
});

let requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.redirect('/');
    }
  } else {
    this.next();
  }
}

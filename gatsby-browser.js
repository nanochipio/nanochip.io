// @flow

exports.onRouteUpdate = ({ action }: { action: string }) => {
  if (action === 'PUSH' && window.$) {
    window.$('body').removeClass('navbar-open');
    window.$('.backdrop-navbar').remove();
  }
};

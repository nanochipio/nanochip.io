// @flow

exports.onRouteUpdate = () => {
  if (window.$) {
    window.$('body').removeClass('topbar-reveal');
    window.$('.topbar-backdrop').remove();
  }
};

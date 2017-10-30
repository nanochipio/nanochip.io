// @flow

exports.onRouteUpdate = ({ action }: { action: string }) => {
  if (action === 'PUSH' && window.$) {
    window.$('body').removeClass('topbar-reveal');
    window.$('.topbar-backdrop').remove();
  }
};

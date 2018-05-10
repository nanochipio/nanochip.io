const { languages, defaultLanguage } = require('./src/i18n-config');

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise((resolve) => {
    deletePage(page);
    languages.forEach((language) => {
      const newPage = Object.assign({}, page, {
        originalPath: page.path,
        path: language === defaultLanguage ? page.path : `/${language}${page.path}`,
        context: { lang: language },
      });
      createPage(newPage);
    });

    resolve();
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  const timestamp = Date.now()
  switch (stage) {
    case 'build-javascript':
      config.merge({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`
        }
      })

      break
  }
  return config
}

const path = require('path');
const nextBuildId = require('next-build-id');

const {
  PHASE_DEVELOPMENT_SERVER,
  // PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const withImages = require('next-images');

module.exports = (phase) => {
  const baseUrl =
    phase === PHASE_DEVELOPMENT_SERVER
      ? 'https://blobstorageservices.aws.weknow.pro/'
      : 'https://blobstorageservices.aws.weknow.pro/';
  const logRoket =
    phase === PHASE_DEVELOPMENT_SERVER ? '' : 'm7srcc/site-qt9sy';

  return withImages({
    env: {
      LOG_ROCKET: logRoket,
      BACKEND_MOCK_URL: 'https://run.mocky.io/v3/',
      // BACKEND_URL: 'http://localhost:5000/',
      BACKEND_URL: baseUrl,
    },
    generateBuildId: () => nextBuildId({ dir: __dirname }),
    exclude: path.resolve(__dirname),
    api: {
      bodyParser: {
        sizeLimit: '500kb',
      },
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
        },
      });

      return config;
    },
  });
};

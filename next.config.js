const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {};

// TODO: Set config.
const nextConfig = {
  workboxOpts: {}
};

module.exports = moduleExists('next-offline')
  ? withOffline(nextConfig)
  : nextConfig

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}

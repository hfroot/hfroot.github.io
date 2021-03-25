module.exports = config => {
    config.addPassthroughCopy("src/style");
    config.addPassthroughCopy("src/assets");
    config.addPassthroughCopy("src/fonts");
    return {
        dir: {
          input: 'src',
          output: 'build'
        }
    };
};

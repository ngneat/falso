const terser = require('@rollup/plugin-terser');

module.exports = (config) => {
    return {
        ...config,
        plugins: [...config.plugins, terser()]
    }
};

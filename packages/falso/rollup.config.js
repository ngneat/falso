const terser = require('@rollup/plugin-terser');

module.exports = (config) => {
    return {
        ...config,
        plugins: [terser(), ...config.plugins]
    }
};

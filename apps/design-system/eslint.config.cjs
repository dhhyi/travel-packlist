const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.base.config.cjs');

module.exports = [...baseConfig, ...nx.configs['flat/typescript']];

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import plugin from 'eslint-plugin-jest-dom';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      'jest-dom': plugin,
    },
  },
  {
    ignores: ['jest.config.cjs', 'build/**/*'],
  },
  { settings: { react: { version: 'detect' } } },
  {
    files: ['src/__tests__/**/*'],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
];

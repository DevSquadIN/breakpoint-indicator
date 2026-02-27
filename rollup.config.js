import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

const external = ['react', 'react-dom', 'react/jsx-runtime'];

const buildPlugins = [
  resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ],
    babelHelpers: 'bundled'
  }),
  commonjs(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(
      devMode ? 'development' : 'production'
    )
  }),
  postcss({
    extensions: ['.css'],
    modules: true,
    inject: true,
    minimize: !devMode
  }),
  !devMode &&
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: true,
        drop_debugger: true
      },
      output: { quote_style: 1 }
    })
].filter(Boolean);

const configs = [
  // ESM bundle
  {
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: devMode ? 'inline' : false
    },
    plugins: buildPlugins
  },
  // CJS bundle
  {
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: devMode ? 'inline' : false,
      exports: 'named'
    },
    plugins: buildPlugins
  }
];

// Type declarations — only generated for production builds
if (!devMode) {
  configs.push({
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [
      // CSS module imports have no types to emit — resolve them to an empty module
      {
        name: 'ignore-css',
        load(id) {
          if (id.endsWith('.css')) return 'export default {}';
        }
      },
      dts({ tsconfig: './tsconfig.json' })
    ]
  });
}

export default configs;

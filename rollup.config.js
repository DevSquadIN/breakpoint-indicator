import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: devMode ? 'inline' : false,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        babelHelpers: 'bundled'
      }),
      commonjs(),
      postcss({
        extensions: ['.css'],
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
    ].filter(Boolean)
  }
];

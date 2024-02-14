import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: devMode ? "inline" : false,
      plugins: [
        resolve(),
        babel({
          exclude: "node_modules/**",
          presets: ["@babel/env", "@babel/preset-react"],
        }),
        commonjs(),
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode,
          },
          output: { quote_style: 1 },
        }),
      ],
    },
  },
];

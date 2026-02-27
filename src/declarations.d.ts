declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare const process: {
  env: {
    NODE_ENV: 'development' | 'production' | 'test';
  };
};

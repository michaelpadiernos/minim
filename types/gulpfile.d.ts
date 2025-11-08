// Additional type declarations for gulpfile.js

/// <reference path="./postcss-modules.d.ts" />

declare module 'lazypipe' {
  interface Lazypipe {
    pipe(fn: Function, ...args: any[]): Lazypipe;
    (): NodeJS.ReadWriteStream;
  }
  
  function lazypipe(): Lazypipe;
  export = lazypipe;
}

// Ensure lightningcss transform function is properly typed
declare module 'lightningcss' {
  interface TransformOptions {
    filename?: string;
    code: Buffer | string;
    minify?: boolean;
    sourceMap?: boolean;
    [key: string]: any;
  }
  
  interface TransformResult {
    code: Buffer;
    map?: Buffer;
  }
  
  export function transform(options: TransformOptions): TransformResult;
}
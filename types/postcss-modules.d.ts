// Type declarations for PostCSS modules without TypeScript definitions

declare module 'postcss-brand-colors' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module '@zeecoder/postcss-container-query' {
  import { PluginCreator } from 'postcss';
  interface Options {
    unit?: string;
    [key: string]: any;
  }
  const plugin: PluginCreator<Options>;
  export default plugin;
}

declare module 'postcss-color-mod-function' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-css-variables' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-custom-selectors' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-font-magician' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-fontsize' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-import-ext-glob' {
  import { PluginCreator } from 'postcss';
  interface Options {
    // Plugin options
    [key: string]: any;
  }
  const plugin: PluginCreator<Options>;
  export default plugin;
}

declare module 'postcss-lightningcss' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-nested-props' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-nested-vars' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-selector-namespace' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

declare module 'postcss-uncss' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<{}>;
  export default plugin;
}

// Gulp plugin declarations
declare module 'gulp-lightningcss' {
  import { Transform } from 'stream';
  function gulpLightningcss(options?: any): Transform;
  export = gulpLightningcss;
}

declare module 'gulp-terser-js' {
  import { Transform } from 'stream';
  function gulpTerser(options?: any): Transform;
  export = gulpTerser;
}

// Other modules
declare module 'uncss' {
  interface Options {
    html?: string[];
    css?: string[];
    ignore?: string[];
    [key: string]: any;
  }
  
  function uncss(html: string | string[], options?: Options): Promise<string>;
  function uncss(html: string | string[], css: string, options?: Options): Promise<string>;
  export = uncss;
}

declare module 'npm-check-updates' {
  interface Options {
    [key: string]: any;
  }
  
  function ncu(options?: Options): Promise<any>;
  export = ncu;
}

declare module 'phosphor-css' {
  // CSS library - no exports needed
}

declare module 'typesettings' {
  // CSS library - no exports needed
}

declare module 'rfs' {
  // CSS library - no exports needed
}
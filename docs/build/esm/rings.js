import { p as promiseResolve, b as bootstrapLazy } from './index-9d9d0a35.js';
export { s as setNonce } from './index-9d9d0a35.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.17.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ring-component",[[1,"ring-component",{"draggingItem":[32],"gameBoard":[32],"playItem":[32],"turn":[32]},null,{"gameBoard":["checkBoard"]}]]]], options);
});

//# sourceMappingURL=rings.js.map
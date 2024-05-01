'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e36bf981.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.17.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('rings.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ring-component.cjs",[[1,"ring-component",{"draggingItem":[32],"gameBoard":[32],"playItem":[32],"turn":[32]},null,{"gameBoard":["checkBoard"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=rings.cjs.js.map
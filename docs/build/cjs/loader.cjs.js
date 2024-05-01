'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e36bf981.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ring-component.cjs",[[1,"ring-component",{"draggingItem":[32],"gameBoard":[32],"playItem":[32],"turn":[32]},null,{"gameBoard":["checkBoard"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map
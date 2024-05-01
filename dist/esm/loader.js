import { b as bootstrapLazy } from './index-9d9d0a35.js';
export { s as setNonce } from './index-9d9d0a35.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["ring-component",[[1,"ring-component",{"draggingItem":[32],"gameBoard":[32],"playItem":[32],"turn":[32]},null,{"gameBoard":["checkBoard"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map


export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.CeXPYqUT.js","_app/immutable/chunks/scheduler.gjOM-VBn.js","_app/immutable/chunks/index.BaL8zlvo.js"];
export const stylesheets = ["_app/immutable/assets/7.B2SkrmdW.css"];
export const fonts = [];

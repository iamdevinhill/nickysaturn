

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.YligM5R7.js","_app/immutable/chunks/scheduler.gjOM-VBn.js","_app/immutable/chunks/index.BaL8zlvo.js"];
export const stylesheets = ["_app/immutable/assets/5.YLRw7vJP.css"];
export const fonts = [];

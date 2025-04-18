

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tour/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BTNRO8oa.js","_app/immutable/chunks/scheduler.BabQTIuJ.js","_app/immutable/chunks/index.BHUZScgJ.js"];
export const stylesheets = ["_app/immutable/assets/6.DjxKeZA4.css"];
export const fonts = [];

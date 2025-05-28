import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Dcc7E0oG.js","_app/immutable/chunks/scheduler.gjOM-VBn.js","_app/immutable/chunks/index.BaL8zlvo.js","_app/immutable/chunks/supabaseClient.CRYj8EB3.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.C-VEwjrX.js"];
export const stylesheets = ["_app/immutable/assets/2.DFg-3wwa.css"];
export const fonts = [];

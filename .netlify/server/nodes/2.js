import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.nKY0INyx.js","_app/immutable/chunks/scheduler.BabQTIuJ.js","_app/immutable/chunks/index.BHUZScgJ.js","_app/immutable/chunks/supabaseClient.CdbFemK2.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/2.BcMKe5Gh.css"];
export const fonts = [];

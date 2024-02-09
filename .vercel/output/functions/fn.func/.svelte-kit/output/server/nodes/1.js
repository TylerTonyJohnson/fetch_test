

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ZDQ9eksZ.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.D7UZ3tYN.js","_app/immutable/chunks/entry.hIcP_l8i.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.L6ydF1ey.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.D7UZ3tYN.js","_app/immutable/chunks/entry.L662WOc1.js"];
export const stylesheets = [];
export const fonts = [];

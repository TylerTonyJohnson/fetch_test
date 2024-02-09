import { c as create_ssr_component, d as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messages = [];
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <button data-svelte-h="svelte-17paaqv">FETCH</button> ${each(messages, (message) => {
    return `<div>${escape(message.title)}</div>`;
  })}`;
});
export {
  Page as default
};

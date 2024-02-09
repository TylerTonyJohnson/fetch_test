<script>
	let messages = [];

	const getMessage = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				messages = json;
			});
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={getMessage}>FETCH</button>

{#each messages as message (message.id)}
	<div>{message.title}</div>
{/each}

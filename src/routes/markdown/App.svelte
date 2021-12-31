<script>
	import { marked } from 'marked';
	import SvelteMarkdown from 'svelte-markdown';

	let markdown = '# sup';
</script>

<div class="columns">
	<textarea bind:value={markdown} class="editor" />

	<div>
		<h1>Using marked</h1>
		<div class="marked">
			<div>{@html marked(markdown)}</div>
		</div>

		<h1>Using svelte-markdown</h1>
		<div class="svelte-markdown">
			<SvelteMarkdown source={markdown} />
		</div>
	</div>
</div>

<style>
	.columns {
		display: flex;
		padding: 5rem;
	}
	.editor {
		margin-right: 3rem;
	}
	.marked {
		padding: 3rem;
		background: #eee;
	}
	.svelte-markdown {
		padding: 3rem;
		background: #aaa;
	}
</style>

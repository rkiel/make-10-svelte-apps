<script>
	let highlightStyle = 'left: 0; opacity: 0';

	function moveHighlight(e) {
		const width = 300;
		const left = e.layerX - width / 2;
		highlightStyle = `left: ${left}px;`;
	}

	function removeHighlight() {
		highlightStyle = 'left: 0; opacity: 0';
	}
</script>

<div class="app">
	<div class="browser">
		<div class="tabs">
			<div class="tab" on:mousemove={moveHighlight} on:mouseout={removeHighlight}>
				<div style={highlightStyle} class="highlight" />
				<a>Home</a>
			</div>
			<div class="tab" on:mousemove={moveHighlight}>
				<a>About</a>
			</div>
			<div class="tab" on:mousemove={moveHighlight}>
				<a>Features</a>
			</div>
		</div>

		<div class="viewport">Pages Go Here</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 19px;
		margin: 0;
		padding: 0;
	}

	.app {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #634cec;
		min-height: 100vh;
	}

	.browser {
		display: flex;
		flex-direction: column;
		background: #ffb91f;
		border-radius: 5px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
		min-width: 60%;
		min-height: 50vh;
	}

	.tabs {
		flex-shrink: 1;
		padding-left: 10px;
		padding-right: 10px;
		display: flex;
		padding-top: 10px;
	}

	.tab {
		position: relative;
		background: #6e45df;
		min-width: 120px;
		font-size: 14px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		transition: 0.3s ease all;
		overflow: hidden;
		cursor: pointer;
	}

	.tab a {
		display: block;
		padding: 12px 25px;
		color: #e1daf5;
		text-decoration: none;
	}

	.tab a.is-active {
		background: #5131a9;
		color: #eee;
	}

	.address-bar {
		background: #5533b3;
		padding: 8px;
	}

	.address-bar input {
		background: #3a2081;
		color: #eee;
		border-radius: 20px;
		border: none;
		outline: none;
		width: 100%;
		padding: 8px 20px;
		font-size: 18px;
	}

	.viewport {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #5131a9;
		color: #dacff7;
		flex: 1;
		flex-grow: 1;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.highlight {
		display: block;
		position: absolute;
		height: 80px;
		width: 300px;
		top: -10px;
		/*left: -100px;*/
		border-radius: 50%;
		transition: 0.3s ease all;
		opacity: 0.8;
		pointer-events: none;
		background: radial-gradient(rgba(157, 128, 238, 1), rgba(157, 128, 238, 0));
	}
</style>

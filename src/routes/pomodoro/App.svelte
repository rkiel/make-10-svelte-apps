<script>
	import Clock from './Clock.svelte';

	import time, { timeLeft, isRunning } from './time';

	function startTimer() {
		title = 'You are doing great';
		time.start();
	}

	function stopTimer() {
		title = 'Keep it up';
		time.stop();
	}

	function resetTimer() {
		title = 'Ready to go another round?';
		time.reset();
	}

	let title = 'Let the countdown begin';
</script>

<main>
	<h2>{title}</h2>

	<Clock time={$timeLeft} />

	<div>
		<button hidden={$isRunning} on:click={startTimer}>Start</button>
		<button hidden={!$isRunning} on:click={stopTimer}>Stop</button>
		<button on:click={resetTimer}>Reset</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

import { get, writable, readable } from 'svelte/store';

export const isRunning = writable(false);
export const timeLeft = writable(25 * 60);

let interval = null;

function countdown() {
	timeLeft.set(get(timeLeft) > 0 ? get(timeLeft) - 1 : get(timeLeft));
}

export function start() {
	if (!interval) {
		interval = setInterval(countdown, 1000);
	}
	isRunning.set(true);
}

export function stop() {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
	isRunning.set(false);
}

export function reset() {
	stop();
	timeLeft.set(25 * 60);
}

export default {
	isRunning,
	timeLeft,
	start,
	stop,
	reset
};

<script>
  export let time;

	function padTime(time) {
	  return time.toString().padStart(2, '0');
	}

	$: minutes = padTime(Math.floor(time / 60));
	$: seconds = padTime(time - minutes * 60);
</script>

<div>
	<span>{minutes}</span>
	<span>:</span>
	<span>{seconds}</span>
</div>

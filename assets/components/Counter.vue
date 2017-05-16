<template>
<div class="counter">
	<h2>The Counter Is: {{ count }}	</h2>

	<p>
		<button @click="count += 1">Increment</button>
	</p>
</div>


</template>


<script>
	export default {

		data() {
			return { count: 0 };
		}, // END data


	}; // END export default

</script>



<style>
	
	.box { background: #e3e3e3; padding: 10px; border: 1px solid #c5c5c5; margin-bottom: 1em; }

</style>
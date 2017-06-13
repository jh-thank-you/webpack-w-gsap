<template>
    
	<router-link v-bind:to="'/' + section">
		<div :id="id" class="media-type">
			<div class="handwritten media-title"><p>{{ section }}</p></div>
		</div>
	</router-link>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id', 'section', ], // END props
		data() {
			return {

			}
		}, // END data  
		methods: {

	
		}, // END methods


	}; // END export default

</script>



<style scoped>


</style>
<template>
    
	<router-link v-bind:to="'/' + section">
		<div @click="heroImageSelected" :id="id" class="media-type">
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

			heroImageSelected() {
				this.heroSrc = this.id;
				eventBus.$emit('heroImageSelected', this.heroSrc);
				console.log(this.heroSrc + " = this.heroSrc - nav button clicked");
			},
	
		}, // END methods


	}; // END export default

</script>



<style scoped>


</style>
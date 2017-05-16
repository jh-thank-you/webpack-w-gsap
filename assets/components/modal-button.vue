<template>
    
	<div @click="exampleSelected" :id="id" class="grid-isotope-item boxFrame" :sector="sector">
		<div class="innerFrame1"></div>
		<div class="innerFrame2"></div>
		<div class="innerFrame3 hoverMe"></div>
		<span class="clientLabel handwritten"><p>{{ client }}</p></span>

		<img class="fadeMe" :src="'assets/img/' + this.id + '1a-sm.png'" :alt="alt">
	</div>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id', 'alt', 'client', 'sector' ], // END props
		data() {
			return {

				imageSrc: '',
			}
		}, // END data
		computed: {


		}, // END computed
		methods: {
			exampleSelected() {

				this.imageSrc = this.id;
				this.$emit('imageSelectChanged', this.imageSrc);
				console.log(this.imageSrc + " = this.imageSrc - modal button clicked");
			}

		}, // END methods
		mounted() {


		}, // END mounted

	}; // END export default

</script>



<style>
	


</style>
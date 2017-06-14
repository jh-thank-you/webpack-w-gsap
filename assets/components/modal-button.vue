<template>
    
	<div @click="exampleSelected" :id="id" class="boxframe" :sector="sector">

		<div class="inner-frame-3 hover-me"></div>
		<span class="client-label handwritten"><p>{{ client }}</p></span>

		<img class="fadeMe" :src="getPic()" :alt="this.id + ' advertisment'">
	</div>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id', 'alt', 'client', 'sector' ], // END props
		data() {
			return {

			}
		}, // END data
		computed: {


		}, // END computed
		methods: {
			exampleSelected() {

				this.imageSrc = this.id;
				this.$emit('imageSelectChanged', this.imageSrc);
				console.log(this.imageSrc + " = this.imageSrc - modal button clicked");
			},

			getPic() {
			  return require('assets/img/' + this.id + '1a-sm.png');
		      return 'assets/img/' + this.id + '1a-sm.png';
		    },

		}, // END methods
		mounted() {


		}, // END mounted

	}; // END export default

</script>



<style scoped>
	


</style>
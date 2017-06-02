<template>
    
	<router-link to="/print">
		<div id="nav-print" class="media-type">
			<div class="media-title"><p>PRINT</p></div>
		</div>
	</router-link>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id' ], // END props
		data() {
			return {

				// imageSrc: '',

			}; // END return

		}, // END data
		methods: {
			exampleSelected() {

				this.imageSrc = this.id;
				this.$emit('imageSelectChanged', this.imageSrc);
				console.log(this.imageSrc + " = this.imageSrc - nav button clicked");
			}

		}, // END methods


	}; // END export default

</script>



<style scoped>
	


</style>
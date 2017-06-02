<template>
    
	<div id="print" class="media-type">
	    <div id="sectionAnimationHeroPrint" class="sectionAnimationHero">
	      <div id="heroAnimationHoverPrint">
	        <div id="linkSpacePrint" class="linkSpaceClick">
	        </div>
	      </div>
	    </div>
	    <router-link to="/print">
	      <div class="linkSpace">
	        <span id="print-title" @click="exampleSelected" class="centerImg navTitle"></span>
	      </div>
	    </router-link>
	</div>

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



<style>
	


</style>
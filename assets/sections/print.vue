<template>

	<div id="section-content-djax" class="texture-paper-bkg"><!-- START section-content-djax  -->
	    
	    <button-close-section-raster></button-close-section-raster>

	    <hero-image></hero-image>
	        	
	    <examples-list></examples-list>

	</div><!-- END section-content-djax  -->

</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesList from 'components/examples-list.vue';

	export default {

		components: { buttonCloseSectionRaster, heroImage, examplesList }, // END components

	}; // END export default

</script>


<style>


</style>
<template>
	<div id="section-wrap" class="texture-paper-bkg">

		<button-close-section-raster></button-close-section-raster>

	    <hero-image></hero-image>
	        	
	    <examples-list-online></examples-list-online>
		
	</div>
</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesListOnline from 'components/examples-list-online.vue';

	export default {

		components: { 

			buttonCloseSectionRaster, 
			heroImage, 
			examplesListOnline,
			
		}, // END

	}; // END export default

</script>


<style scoped>


</style>
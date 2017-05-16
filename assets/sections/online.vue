<template>
	<div id="section-content-djax" class="texture-paper-bkg">

		<button-close-section-raster></button-close-section-raster>

		<h1>Online</h1>

<!-- 	    <hero-image></hero-image>
	        	
	    <examples-list></examples-list> -->
		
	</div>
</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesList from 'components/examples-list.vue';

	export default {

		components: { buttonCloseSectionRaster, heroImage, examplesList }, // END

	}; // END export default

</script>


<style>

.section-content {
	width: 200px;
	height: 200px;
	border: solid 1px red;
}

</style>
<template>
    
	<div>
		<modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>
		
		<div  @click="showModal = true" :imageSrc="imagesource" id="section-content" class="grid-isotope justify-content handwritten">
			<modal-button v-for="example in examples" v-bind:key="example.id" :id="example.id" :client="example.client" :sector="example.sector" :alt="example.alt" :src="example.src" :imageSrc="imagesource" @imageSelectChanged="imagesource = $event"></modal-button>
		</div>
	</div>

</template>


<script>

	import modalSlideshow from 'components/modal-slideshow.vue';
	import modalButton from 'components/modal-button.vue';

	export default {
		
		components: { modalSlideshow, modalButton }, // END components
		data() {
			return {

				showModal: false,
				examples: [ 

					{id: 'modalPrintAdvil', alt: 'Advil Video Campaign', client: 'Advil', sector: 'default-select healthcare pharma', },

					{id: 'modalPrintCimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

					{id: 'modalPrintCreditSuisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: 'default-select financial', },

					{id: 'modalPrintCreditSuisse', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: 'default-select financial', },

					{id: 'modalPrintGinkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

					{id: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', },

				], // END Examples
				id: '',
				client: '',
				sector: '',
				alt: '',
				imagesource: '',

			}; // END return

		}, // END data
		methods: {


		}, // END methods

	}; // END export default

</script>



<style scoped>
	


</style>
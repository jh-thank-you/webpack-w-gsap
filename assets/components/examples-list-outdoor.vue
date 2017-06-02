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

					{id: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

					{id: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

					{id: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: 'financial', },

					{id: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

					{id: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: 'btob laundry', },

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
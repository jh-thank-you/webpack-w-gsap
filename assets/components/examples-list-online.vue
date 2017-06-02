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

					{id: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', },

					{id: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', },

					{id: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', },

					{id: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

					{id: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'HEART Martial Arts', sector: 'default-select beauty fashion fragrance', },

					{id: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob laundry', },

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
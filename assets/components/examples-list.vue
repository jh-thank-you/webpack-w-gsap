<template>
    
	<div>
		<modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>
		
		<div  @click="showModal = true" :imageSrc="imagesource" id="section-content-print" class="grid-isotope justifyContent handwritten">
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

					{id: 'modalPrintAdvil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: 'default-select healthcare pharma', },

					{id: 'modalPrintAMNH', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: 'tourism', },
					{id: 'modalPrintAmex', alt: 'Amex Ad', client: 'Amex', sector: 'financial', },

					{id: 'modalPrintAmtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: 'default-select transportation tourism', },

					{id: 'modalPrintBayer', alt: 'Bayer Ad', client: 'Bayer', sector: 'default-select healthcare pharma', },

					{id: 'modalPrintBonitaBay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: 'realestate hotel', },

					{id: 'modalPrintCardeneIV', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: 'healthcare pharma locked', },

					{id: 'modalPrintCigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: 'default-select btob insurance healthcare', },

					{id: 'locked', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

					{id: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', },

					{id: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', },

					{id: 'modalPrintEllisIsland', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: 'default-select tourism', },

					{id: 'modalPrintEspn', alt: 'ESPN Ad', client: 'ESPN', sector: 'default-select sports fitness', },

					{id: 'modalPrintFlIntlMuseum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: 'default-select tourism', },

					{id: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

					{id: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: 'financial', },

					{id: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', },

					{id: 'modalPrintLcc', alt: 'LCC Ad', client: 'LCC', sector: 'publicservice', },

					{id: 'modalPrintLevemir', alt: 'Levemir Ad', client: 'Levemir', sector: 'healthcare pharma locked', },

					{id: 'modalPrintLogos', alt: 'Logos Various', client: 'Logos', sector: 'default-select branding btob healthcare fitness publicservice sports', },

					{id: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

					{id: 'modalPrintMistral', alt: 'Mistral Ad', client: 'Mistral', sector: 'default-select sports fitness', },

					{id: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', },

					{id: 'modalPrintOyamaKarate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: 'default-select sports fitness', },

					{id: 'modalPrintSpiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: 'healthcare pharma locked', },

					{id: 'modalPrintTradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: 'btob shipping', },

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



<style>
	


</style>
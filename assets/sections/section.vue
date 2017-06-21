<template>

	<div :id="id" class="section-wrap texture-paper-bkg">
	    
	    <button-close-section-raster></button-close-section-raster>
		
		<!-- id data is passed in by routes see notes below-->
	    <hero-image :class="id"></hero-image>

		<modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>

		<div id="section-content" class="grid-isotope justify-content handwritten">
			<modal-button v-for="example in getExamples()" v-bind:key="example.exampleid" :id="example.exampleid" :client="example.client" :sector="example.sector" :alt="example.alt" :access="example.access" @imageSelectChanged="imagesource = $event"></modal-button>
		</div>

	</div>

</template>


<script>
	import { eventBus } from 'assets/main.js';

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	import modalSlideshow from 'components/modal-slideshow.vue';
	import modalButton from 'components/modal-button.vue';

	let currentExamples = null;

	export default {

		// passing in ID data from nav-button to hero-image through vue-router 
		// need to be passed here in the parent level vs at the hero-image child level
		props: [ 'id' ],// END props
		components: { 
			buttonCloseSectionRaster, 
			heroImage, 
			modalSlideshow, 
			modalButton,

		}, // END components
		data() {
	      return {

	      	showModal: false,
	      	exampleid: '',
			client: '',
			sector: '',
			alt: '',
			imagesource: '',
			access: '',
			examples: currentExamples,

	      }
	    }, // END data
		created() {

			 eventBus.$on('modalVisibility', (showModal) => {
        
		        this.showModal = showModal;
		        return this.showModal;

		      }); // END eventBus

		}, // END created
		computed: {


		}, // END computed
		methods: {

			// dynamically set which array is passed based on the Parent ID data
		 	getExamples() {
				
		 		var currentID = this.id;

				if (currentID == 'section-print') {

					console.log( currentID + ' = currentID Print Examples');

					currentExamples = [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: 'default-select healthcare pharma', access: 'unlocked', },

						{exampleid: 'modalPrintAMNH', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: 'tourism', access: 'unlocked', },

						{exampleid: 'modalPrintAmex', alt: 'Amex Ad', client: 'Amex', sector: 'financial', access: 'unlocked', },

						{exampleid: 'modalPrintAmtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: 'default-select transportation tourism', access: 'unlocked', },

						{exampleid: 'modalPrintBayer', alt: 'Bayer Ad', client: 'Bayer', sector: 'default-select healthcare pharma', access: 'unlocked', },

						{exampleid: 'modalPrintBonitaBay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: 'realestate hotel', access: 'unlocked', },

						{exampleid: 'modalPrintCardeneIV', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: 'healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintCigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: 'default-select btob insurance healthcare', access: 'unlocked', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', access: 'unlocked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', access: 'unlocked', },

						{exampleid: 'modalPrintEllisIsland', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: 'default-select tourism', access: 'unlocked', },

						{exampleid: 'modalPrintEspn', alt: 'ESPN Ad', client: 'ESPN', sector: 'default-select sports fitness', access: 'unlocked', },

						{exampleid: 'modalPrintFlIntlMuseum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: 'default-select tourism', access: 'unlocked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', access: 'unlocked', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: 'financial', access: 'unlocked', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', access: 'unlocked', },

						{exampleid: 'modalPrintLcc', alt: 'LCC Ad', client: 'LCC', sector: 'publicservice', access: 'unlocked', },

						{exampleid: 'modalPrintLevemir', alt: 'Levemir Ad', client: 'Levemir', sector: 'healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintLogos', alt: 'Logos Various', client: 'Logos', sector: 'default-select branding btob healthcare fitness publicservice sports', access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', access: 'unlocked', },

						{exampleid: 'modalPrintMistral', alt: 'Mistral Ad', client: 'Mistral', sector: 'default-select sports fitness', access: 'unlocked', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', access: 'unlocked', },

						{exampleid: 'modalPrintOyamaKarate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: 'default-select sports fitness', access: 'unlocked', },

						{exampleid: 'modalPrintSpiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: 'healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintTradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: 'btob shipping', access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', access: 'unlocked', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-video') {

					console.log( currentID + ' = currentID Video Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Video Campaign', client: 'Advil', sector: 'default-select healthcare pharma', access: 'unlocked', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: 'default-select healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: 'default-select financial', access: 'unlocked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: 'default-select financial', access: 'unlocked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', access: 'unlocked', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', access: 'unlocked', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-outdoor') {

					console.log( currentID + ' = currentID Outdoor Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma', access: 'locked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', access: 'unlocked', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: 'financial', access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: 'btob cleaning', access: 'unlocked', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-online') {

					console.log( currentID + ' = currentID Online Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', access: 'unlocked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', access: 'unlocked', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'HEART Martial Arts', sector: 'default-select beauty fashion fragrance', access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', access: 'unlocked', },

					]; // END currentExamples

					return currentExamples;

				} else {
					console.log(this.id + ' - Error no data for examples in section.vue component');
				}; // END If - Else Examples

		    }, // END getExamples

		}, // END methods

	}; // END export default

</script>


<style scoped>


</style>
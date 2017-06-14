<template>

	<div :id="id" class="section-wrap texture-paper-bkg">
	    
	    <button-close-section-raster></button-close-section-raster>
		
		<!-- id data is passed in by routes see notes below-->
	    <hero-image :class="id"></hero-image>
	        	
		<modal-slideshow v-if="showModal" @close="showModal = false; tabDisplay();" :imageSrc="imagesource"></modal-slideshow>
		
		<div @click="showModal = true; tabDisplay();" :imageSrc="imagesource" id="section-content" class="grid-isotope justify-content handwritten">
			<modal-button v-for="example in getExamples()" v-bind:key="example.exampleid" :id="example.exampleid" :client="example.client" :sector="example.sector" :alt="example.alt" :src="example.src" :imageSrc="imagesource" @imageSelectChanged="imagesource = $event" :lockstatus="example.lockstatus"></modal-button>
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
			lockstatus: '',
			'section-print': [ 

				{exampleid: 'modalPrintAdvil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: 'default-select healthcare pharma', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintAMNH', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: 'tourism', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintAmex', alt: 'Amex Ad', client: 'Amex', sector: 'financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintAmtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: 'default-select transportation tourism', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintBayer', alt: 'Bayer Ad', client: 'Bayer', sector: 'default-select healthcare pharma', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintBonitaBay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: 'realestate hotel', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCardeneIV', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: 'healthcare pharma locked', lockstatus: 'locked', },

				{exampleid: 'modalPrintCigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: 'default-select btob insurance healthcare', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', lockstatus: 'locked', },

				{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintEllisIsland', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: 'default-select tourism', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintEspn', alt: 'ESPN Ad', client: 'ESPN', sector: 'default-select sports fitness', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintFlIntlMuseum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: 'default-select tourism', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: 'financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintLcc', alt: 'LCC Ad', client: 'LCC', sector: 'publicservice', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintLevemir', alt: 'Levemir Ad', client: 'Levemir', sector: 'healthcare pharma locked', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintLogos', alt: 'Logos Various', client: 'Logos', sector: 'default-select branding btob healthcare fitness publicservice sports', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintMistral', alt: 'Mistral Ad', client: 'Mistral', sector: 'default-select sports fitness', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintOyamaKarate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: 'default-select sports fitness', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintSpiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: 'healthcare pharma locked', lockstatus: 'locked', },

				{exampleid: 'modalPrintTradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: 'btob shipping', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', lockstatus: 'unlocked', },

			],
			'section-video': [ 

				{exampleid: 'modalPrintAdvil', alt: 'Advil Video Campaign', client: 'Advil', sector: 'default-select healthcare pharma', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: 'default-select healthcare pharma locked', lockstatus: 'locked', },

				{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: 'default-select financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCreditSuisse', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: 'default-select financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', lockstatus: 'unlocked', },

			],
			'section-outdoor': [ 

				{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', lockstatus: 'locked', },

				{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: 'financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: 'btob cleaning', lockstatus: 'unlocked', },

			],
			'section-online': [ 

				{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'HEART Martial Arts', sector: 'default-select beauty fashion fragrance', lockstatus: 'unlocked', },

				{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', lockstatus: 'unlocked', },

			],

	      }
	    }, // END data
		created() {


		}, // END created
		computed: {


		}, // END computed
		methods: {

			tabDisplay() {
		      	var showTab = !this.showModal;
		        eventBus.$emit('setTabVisibility', showTab);
		     },

			// dynamically set which array is passed based on the Parent ID data
		 	getExamples() {
				
		 		var currentID = this.id;

				if (currentID == 'section-print') {

					console.log( currentID + ' = currentID Print Examples');

					currentExamples = [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: 'default-select healthcare pharma', lockstatus: 'unlocked', },

						{exampleid: 'modalPrintAMNH', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: 'tourism', },
						{exampleid: 'modalPrintAmex', alt: 'Amex Ad', client: 'Amex', sector: 'financial', },

						{exampleid: 'modalPrintAmtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: 'default-select transportation tourism', },

						{exampleid: 'modalPrintBayer', alt: 'Bayer Ad', client: 'Bayer', sector: 'default-select healthcare pharma', },

						{exampleid: 'modalPrintBonitaBay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: 'realestate hotel', },

						{exampleid: 'modalPrintCardeneIV', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: 'healthcare pharma locked', },

						{exampleid: 'modalPrintCigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: 'default-select btob insurance healthcare', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', },

						{exampleid: 'modalPrintEllisIsland', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: 'default-select tourism', },

						{exampleid: 'modalPrintEspn', alt: 'ESPN Ad', client: 'ESPN', sector: 'default-select sports fitness', },

						{exampleid: 'modalPrintFlIntlMuseum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: 'default-select tourism', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: 'financial', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', },

						{exampleid: 'modalPrintLcc', alt: 'LCC Ad', client: 'LCC', sector: 'publicservice', },

						{exampleid: 'modalPrintLevemir', alt: 'Levemir Ad', client: 'Levemir', sector: 'healthcare pharma locked', },

						{exampleid: 'modalPrintLogos', alt: 'Logos Various', client: 'Logos', sector: 'default-select branding btob healthcare fitness publicservice sports', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

						{exampleid: 'modalPrintMistral', alt: 'Mistral Ad', client: 'Mistral', sector: 'default-select sports fitness', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', },

						{exampleid: 'modalPrintOyamaKarate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: 'default-select sports fitness', },

						{exampleid: 'modalPrintSpiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: 'healthcare pharma locked', },

						{exampleid: 'modalPrintTradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: 'btob shipping', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-video') {

					console.log( currentID + ' = currentID Video Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Video Campaign', client: 'Advil', sector: 'default-select healthcare pharma', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: 'default-select financial', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: 'default-select financial', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: 'default-select healthcare publicservice', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-outdoor') {

					console.log( currentID + ' = currentID Outdoor Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: 'default-select healthcare pharma locked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: 'default-select healthcare pharma nutrition', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: 'financial', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: 'btob cleaning', },

					]; // END currentExamples

					return currentExamples;

				} else if (currentID == 'section-online') {

					console.log( currentID + ' = currentID Online Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: 'default-select technology', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: 'default-select financial', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: 'default-select sports fitness', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: 'default-select beauty fashion fragrance', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'HEART Martial Arts', sector: 'default-select beauty fashion fragrance', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: 'btob cleaning', },

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
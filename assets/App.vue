<template>
  <div id="app" class="container">

  <name-title-tag></name-title-tag>
  <nav-corner-menu></nav-corner-menu>
  <nav-small-list></nav-small-list>
  <contact-and-prefs></contact-and-prefs>


  <modal-slideshow v-if="showModal" @close="showModal = false">
  </modal-slideshow>

  <!-- <button @click="showModal = true">Show Modal</button> -->

  </div>
</template>

<script>

  // Import the components your template will need.
  import navCornerMenu from 'components/nav-corner-menu.vue';
  import modalSlideshow from 'components/modal-slideshow.vue';
  import nameTitleTag from 'components/name-title-tag.vue';
  import navSmallList from 'components/nav-small-list.vue';
  import contactAndPrefs from 'components/contact-and-prefs.vue';


  export default {
    name: 'app',
    // tell your root component to use the child component
    // If you don't tell the root component about the child component 
    // it doesn't know it exists, thus it can't use or do anything with it.

    // Nest your imported components to let the root component know about them
    // components: { Message, Counter, modalSlideshow, cornerNav, nameTitleTag, smallNavList, contactAndPrefs },
    data() {
      return {
        // Data for your components will go here
        showModal: false,
        name: '',
        description: '',
        errors: {},
      }
    }, // END data
    methods: {
        onSubmit() {
          alert('submitting');
          axios.post('./projects', this.$data)
          .then(response => alert('Success Form Submitted'))
          .catch(error => this.errors = error.response.data);
        } 

    }, // END methods

  }; // export default
</script>

<style>


</style>

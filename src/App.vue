<script>
import AppHeader from './components/AppHeader.vue';
import SelectItem from './components/SelectItem.vue';
import axios from 'axios';
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    AppHeader, SelectItem
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          //console.log(resp)
          this.store.actors = resp.data;
          //console.log(this.store.actors)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    //console.log(this.store.actors)
  }
}
</script>
<template>
  <app-header></app-header>
  <main id="site_main">
    <div class="container">
      <select-item></select-item>
      <!-- <p>{{ store.userCategory }}</p> -->
      <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 p-5 g-3 justify-content-center rounded-4">
        <div class="charsNum text-white fw-bold p-3 w-100 mb-4 rounded-3">Found 62 characters</div>
        <div class="col" v-for="actor in store.actors">
          <div class="ms_content p-3 text-center d-flex flex-column justify-content-center rounded-3">
            <img class="img-fluid" :src="actor.img" :alt="actor.name">
            <h5 class="text-white text-uppercase">{{ actor.name }}</h5>
            <div class="caption">{{ actor.category }}</div>
            <div class="caption small">{{ actor.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">

</style>
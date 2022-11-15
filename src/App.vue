<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    AppMain, AppHeader
  },
  data() {
    return {
      store,
      error: false,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          this.store.loading = false;
          this.store.actors = resp.data;

        })
        .catch(err => {
          this.store.loading = false;
          this.error = true;
          this.store.errorMsg = err.message;
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
  <app-main v-if="!error"></app-main>
  <div class="text-white error" v-else>{{ store.errorMsg }}</div>

</template>
<style lang="scss">

</style>
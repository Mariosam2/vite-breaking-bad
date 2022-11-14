<script>
import AppMain from './components/AppMain.vue';
import LoadingItem from './components/LoadingItem.vue';
import axios from 'axios';
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    AppMain, LoadingItem
  },
  data() {
    return {
      store,
      loading: true,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          //console.log(resp)
          this.loading = false;
          this.store.actors = resp.data;
          this.store.currentActors = resp.data;
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
  <loading-item v-if="loading"></loading-item>
  <app-main v-else></app-main>

</template>
<style lang="scss">

</style>
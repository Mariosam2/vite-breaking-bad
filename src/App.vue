<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    AppHeader, AppMain
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
  <app-header></app-header>
  <app-main></app-main>
</template>
<style lang="scss">

</style>
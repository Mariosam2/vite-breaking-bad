<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
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
  mounted() {
    this.store.callApi(this.store.API_URL)
    //console.log(this.store.actors)
  }
}
</script>
<template>
  <app-header></app-header>
  <app-main v-if="store.errorMsg === null"></app-main>
  <div class="text-white error" v-else>{{ store.errorMsg }}</div>

</template>
<style lang="scss">

</style>
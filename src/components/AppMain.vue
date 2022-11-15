<script>
import SelectItem from './SelectItem.vue';
import LoadingItem from './LoadingItem.vue';
import CardItem from './CardItem.vue';
import { store } from '../store.js'
export default {
    name: 'AppMain',
    components: {
        SelectItem, CardItem, LoadingItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main id="site_main">

        <div class="container" v-if="store.loading">
            <loading-item></loading-item>
        </div>
        <div class="container" v-else>
            <select-item></select-item>
            <!-- <p>{{ store.userCategory }}</p> -->
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 p-3 p-xl-5 g-3 justify-content-center rounded-4">
                <div class="charsNum text-white fw-bold p-3 w-100 mb-4 rounded-3">Found
                    {{ this.store.currentActors.length }} characters</div>
                <card-item v-for="actor in store.currentActors" :actor="actor" />
            </div>
        </div>
    </main>

</template>
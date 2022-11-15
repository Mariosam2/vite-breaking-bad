<script>
import SelectItem from './SelectItem.vue';
import LoadingItem from './LoadingItem.vue';
import CardItem from './CardItem.vue';
import { store, callApi } from '../store.js';


export default {
    name: 'AppMain',
    components: {
        SelectItem, CardItem, LoadingItem
    },

    data() {
        return {
            store,
        }
    },
    methods: {
        filterActors() {
            if (this.store.userCategory !== 'Breaking Bad, Better Call Saul') {
                this.store.loading = true;
                let formattedCategory = this.store.userCategory.split(' ').join('+');
                //console.log(formattedCategory);
                let changedUrl = `${this.store.API_URL}?category=${formattedCategory}`;
                callApi(changedUrl);
            } else {
                this.store.loading = true;
                callApi(this.store.API_URL)
            }


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
            <select-item @filter="filterActors"></select-item>
            <!-- <p>{{ store.userCategory }}</p> -->
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 p-3 p-xl-5 g-3 justify-content-center rounded-4"
                v-if="store.errorMsg === null">
                <div class="charsNum text-white fw-bold p-3 w-100 mb-4 rounded-3">Found
                    {{ this.store.actors.length }} characters</div>
                <card-item v-for="actor in store.actors" :actor="actor" />
            </div>
            <div class="text-white error" v-else>{{ store.errorMsg }}</div>
        </div>
    </main>

</template>
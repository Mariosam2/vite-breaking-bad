<script>
import { store } from '../store.js';
export default {
    name: 'SelectItem',
    data() {
        return {
            store,
            currentActors: null,
        }
    },
    methods: {
        filterActors() {
            //console.log(this.store.userCategory)
            console.log(this.store.userCategory)
            this.store.currentActors = this.store.actors.filter(actor => {
                //console.log(actor.category)

                return actor.category.includes(this.store.userCategory)
            })


        }
    }
}
</script>
<template>
    <select name="category" id="category" class="p-1 my-5 rounded-3" v-model="store.userCategory"
        @change="filterActors">
        <option class="d-none" value="">Select Category</option>
        <option v-for="option in store.options" :value="option.value">{{
                option.text
        }}</option>

    </select>
</template>
<style lang="scss" scoped>

</style>
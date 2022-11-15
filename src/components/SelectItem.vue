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

}
</script>
<template>
    <select name="category" id="category" class="p-1 my-5 rounded-3" v-model="store.userCategory"
        @change="$emit('filter')">
        <option class="d-none" value="">Select Category</option>
        <option v-for="option in store.options" :value="option.value">{{
                option.text
        }}</option>

    </select>
</template>
<style lang="scss" scoped>

</style>
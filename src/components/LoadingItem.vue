<script>
export default {
    name: 'LoadingItem'
}
</script>

<template>
    <div class="loading text-white fw-bold fs-2">Loading...</div>
</template>

<style lang="scss" scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}
</style>
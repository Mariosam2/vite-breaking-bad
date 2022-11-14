<script>
export default {
    name: 'CardItem',
    props: {
        actor: Object,
    }
}
</script>
<template>
    <div class="col">
        <div class="ms_content p-3 text-center d-flex flex-column justify-content-center rounded-3">
            <img class="img-fluid" :src="actor.img" :alt="actor.name">
            <h5 class="text-white text-uppercase">{{ actor.name }}</h5>
            <div class="caption">{{ actor.category }}</div>
            <div class="caption small">{{ actor.status }}</div>
        </div>
    </div>
</template>

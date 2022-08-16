<template>
    <div class="chat-log"></div>
</template>

<script>
export default {
    name: 'ChatLog',
    computed: {
        id() {
            return this.$route.params.id;
        }
    },

}
</script>
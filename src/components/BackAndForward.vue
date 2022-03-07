<template>
  <button @click="prevPage">Previous Page</button>
  <button @click="nextPage">Next Page</button>
</template>

<script>
export default {
    name: 'BackAndForward',
    methods: {
        prevPage() {
            this.$router.go(-1);
        },
        nextPage() {
            this.$router.go(1);
        }
    }
}
</script>

<style>

</style>
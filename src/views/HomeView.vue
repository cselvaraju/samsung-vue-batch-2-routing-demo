<template>
  <div class="home">
    <h1>Welcome to Home Page</h1>
  </div>
  <BackAndForward />
</template>

<script>
import BackAndForward from "../components/BackAndForward.vue";

export default {
  name: "HomeView",
  components: {
    BackAndForward,
  },
};
</script>

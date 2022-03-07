<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <back-and-forward />
</template>

<script>
import BackAndForward from '../components/BackAndForward.vue';

export default {
  name: 'AboutView',
  components: {
    BackAndForward
  }
}
</script>
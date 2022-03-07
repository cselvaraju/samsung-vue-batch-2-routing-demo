<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/books">Book List</router-link> |
    <button @click="gotoHomePage">Go to Home Page</button> |
    <button @click="gotoAboutPage">Go To About Page</button>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'RootComponent',
  methods: {
    gotoHomePage() {
      this.$router.push('/');
    },
    gotoAboutPage() {
      this.$router.push('/about');
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

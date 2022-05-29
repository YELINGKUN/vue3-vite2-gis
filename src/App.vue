<template>
  <RouterView />
</template>

<script>
// import layout from "./views/layout/layout.vue";
import login from './views/login/login.vue'
export default {
  name: 'App',
  components: {
    // layout,
    login,
  }
}
</script>

<style scoped>

</style>

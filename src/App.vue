<template>
  <div id="app" class="m-2">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style src="./styles/accessibility.css"></style>
<style src="./styles/styles.css"></style>
<style src="./styles/transitions.css"></style>

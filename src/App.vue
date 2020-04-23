<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Report</router-link>
      <router-link to="/zone">Zone Report</router-link>
      <router-link to="/buoy">Buoy Report</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view />
  </div>
</template>

<style src="./styles/accessibility.css"></style>
<style src="./styles/styles.css"></style>
<style src="./styles/transitions.css"></style>

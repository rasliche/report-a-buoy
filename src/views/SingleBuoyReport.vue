<template>
  <div class="report">
    <label>Buoy Total</label>
    <input type="number" min="0">
    <div v-for="buoy in buoys" :key="buoy">
      <Buoy :id="buoy"></Buoy>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Buoy from '@/components/Buoy.vue'

export default {
  name: 'Report',
  components: {
    Buoy
  },
  data() {
    return {
      buoys: [1,2,3,4,5,6,7]
    }
  }
}
</script>

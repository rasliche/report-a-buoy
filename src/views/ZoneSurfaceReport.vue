<template>
  <div class="report">
    <label>Buoy Total</label>
    <input type="number" min="0">
  </div>
</template>

<script>
export default {
  name: 'Report',
  data() {
    return {
      buoys: [1,2,3,4,5,6,7]
    }
  }
}
</script>

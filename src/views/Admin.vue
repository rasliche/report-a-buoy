<template>
  <div class="admin">
    <h1>Admin</h1>
    <div>
      Buoys
      <div v-for="(report, index) in buoyReports" :key="index" :id="report.id">
        {{ report }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Admin',
  data() {
    return {

    }
  },
  computed: {
    ...mapState('zone', {
      zoneReports: 'reports'
    }),
    ...mapState('buoy', {
      buoyReports: 'reports'
    })
  }
}
</script>
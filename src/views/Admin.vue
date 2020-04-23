<template>
  <div class="admin">
    <h1>Admin</h1>
    <div>
      Buoys
      <Buoy v-for="(buoy, index) in buoyReports" :key="index" :id="buoy.id"></Buoy>
    </div>
  </div>
</template>

<script>
import Buoy from '@/components/Buoy'
import { mapState } from 'vuex'

export default {
  name: 'Admin',
  components: {
    Buoy
  },
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
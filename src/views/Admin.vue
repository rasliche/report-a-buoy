<template>
  <div class="admin">
    <h1>Admin</h1>
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
    ...mapState(['reports'])
  }
}
</script>
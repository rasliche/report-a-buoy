<template>
  <div class="report">
    <form action="post" class="flex-wrap" @click.prevent="submitSingleBuoyReport">
      <div class="w-full">
        <label>Buoy ID</label>
        <input type="text" v-model="id" />
      </div>
      <div class="w-full">
        <label>Pick Up Line Condition</label>
        <select name="pul" id="pul" v-model="pulStatus">
          <option value="good">Good</option>
          <option value="dirty">Dirty</option>
          <option value="damaged">Damaged</option>
          <option value="missing">Missing</option>
        </select>
      </div>
      <div class="w-full">
        <label>Buoy Condition</label>
        <select name="pul" id="pul" v-model="bStatus">
          <option value="good">Good</option>
          <option value="dirty">Dirty</option>
          <option value="damaged">Damaged</option>
          <option value="missing">Missing</option>
        </select>
      </div>
      <div class="w-full">
        <label>Downline Condition</label>
        <select name="pul" id="pul" v-model="dlStatus">
          <option value="good">Good</option>
          <option value="dirty">Dirty</option>
          <option value="damaged">Damaged</option>
          <option value="missing">Missing</option>
        </select>
      </div>
      <div class="w-full">
        <label>Anchor Condition</label>
        <select name="pul" id="pul" v-model="aStatus">
          <option value="good">Good</option>
          <option value="dirty">Dirty</option>
          <option value="damaged">Damaged</option>
          <option value="missing">Missing</option>
        </select>
      </div>
    </form>
    <Buoy :id="id"></Buoy>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Buoy from '@/components/Buoy.vue'

export default {
  name: 'Report',
  components: {
    Buoy
  },
  data() {
    return {
      id: null,
      pulStatus: null,
      bStatus: null,
      dlStatus: null,
      aStatus: null,
      date: null,
      notes: null,
    }
  },
  methods: {
    ...mapActions('buoy', ['addBuoy']),
    submitSingleBuoyReport() {
      this.addBuoy({
        id: this.id,
      })
    }
  }
}
</script>

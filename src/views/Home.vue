<template>
  <div class="home">
    <div class="">
      <div class="max-w-md text-center mx-auto">
        <p>
          Thank you for helping us keep the mooring field in play.
          Your reports on this site go directly to the Marine Operations
          Technicians that maintain the entire set of buoys across the 2900^2 
          nautical miles of Florida Keys National Marine Sanctuary waters.
        </p>
      </div>
      <div class="flex justify-around">
        <div class="rounded bg-gray-100 w-2/5">
          <router-link to="{ name: ZoneSurfaceReport }">Zone Surface Report</router-link>
        </div>
        <div class="rounded bg-gray-100 w-2/5">
          <router-link to="{ name: SingleBuoyReport }">Single Buoy Report</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
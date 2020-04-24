<template>
<div>
    <!-- buoy -->
    <div class="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
        <p class="w-full bg-blue-800 text-center text-gray-100">{{ id }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "Buoy",
    props: {
        id: {
            type: String,
            default: 'buoy',
        },
        type: {
            type: String,
            default: 'mooring',
        }
    },
    computed: {
        // buoyStyles() {

        // }
    }
}
</script>

<style>

</style>
<template>
<div class="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center">
    {{ id }}
</div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'mooring',
        }
    },
    name: "Buoy",
    computed: {
        // buoyStyles() {

        // }
    }
}
</script>

<style>

</style>
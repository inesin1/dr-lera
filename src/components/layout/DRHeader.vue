<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DRHeader",
  props: {
    message: String
  }
})
</script>

<template>
  <w-flex justify-center class="deep-purple-dark3--bg">
    <div class=".headline white">
      {{ message }}
    </div>
  </w-flex>
</template>

<style scoped>

</style>
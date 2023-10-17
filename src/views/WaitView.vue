<script>
import {defineComponent} from 'vue'
import images from "@/data/images"

export default defineComponent({
  name: "WaitView",
  data: function () {
    return {
      images
    }
  }
})
</script>

<template>
  <w-flex align-center column class="px2 py12">
    <w-image :src="images.wait"/>

    <div
        class="title2 text-center mt4"
    >
      Я устааал, давай продолжим завтра. Заходи после обеда, я люблю поспать))
    </div>
  </w-flex>
</template>

<style scoped>

</style>
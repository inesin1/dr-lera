<script>
import {defineComponent} from 'vue'
import images from "@/data/images"
import router from "@/router"

export default defineComponent({
  name: "WaitView",
  data: function () {
    return {
      images, router,
      canContinue: true
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

    <w-button
        v-if="canContinue"
        xl
        class="mt12 pa8"
        @click="router.push(`/q/5`)"
    >Разбудить</w-button>
  </w-flex>
</template>

<style scoped>

</style>
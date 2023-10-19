<script>
import {defineComponent} from 'vue'
import images from "@/data/images";
import router from "@/router";
import bot from "@/config/bot"

export default defineComponent({
  name: "EndView",
  data: function() {
    return {
      images, router, bot
    }
  },
})
</script>

<template>
  <w-flex column align-center class="px2 py12">
    <w-image :src="images.end"/>

    <div
        class="title2 text-center mt4"
    >
      Рад, что ты довольна!) Теперь мне нужно идти, но надеюсь мы не прощаемся! Пока!
    </div>

    <w-button
        xl
        class="mt12 pa8"
        @click="bot.sendMessage('Пока!')"
    >Пока!</w-button>
  </w-flex>
</template>

<style scoped>

</style>
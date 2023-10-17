<script>
import {defineComponent} from 'vue'
import router from "@/router";
import images from "@/data/images"

export default defineComponent({
  name: "DRWelcomePage",
  data: function () {
    return {
      router, images
    }
  },
})
</script>

<template>
  <w-flex column align-center class="px2 py12">
    <div
      class="title2"
    >
      Привет, меня зовут Нутри!
    </div>

    <w-image
        class="my4"
        :src="images.welcome"/>

    <div
        class="title2 text-center"
    >
      Чтобы получить подарок, тебе нужно пройти небольшой квест
    </div>

    <w-button
      xl
      class="mt12 pa8"
      @click="router.push('/q/1')"
    >Начать</w-button>

    <div class="caption mt4">
      Если кнопка не работает, обнови страницу после нажатия
    </div>
  </w-flex>
</template>

<style scoped>

</style>
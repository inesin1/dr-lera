<script>
import {defineComponent} from 'vue'
import images from "@/data/images";
import router from "@/router";

export default defineComponent({
  name: "NoPageView",
  data: function() {
    return {
      images, router,
      prevQuestionId: this.$route.params.prevQuestionId
    }
  },
  created() {
    console.log(this.$route.params.prevQuestionId);
  }
})
</script>

<template>
  <w-flex column align-center class="px2 py12">
    <w-image :src="images.nopage"/>

    <div
        class="title2 text-center mt4"
    >
      Сюда еще рано, вернись назад, пожалуйста
    </div>

    <w-button
        xl
        class="mt12 pa8"
        @click="router.push(`/q/${prevQuestionId}`)"
    >Вернуться</w-button>

    <div class="caption mt4">
      Если кнопка не работает, обнови страницу после нажатия
    </div>
  </w-flex>
</template>

<style scoped>

</style>
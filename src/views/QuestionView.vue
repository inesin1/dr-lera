<script>
import {defineComponent} from 'vue'
import questionsData from '../data/questions'
import images from "@/data/images"
import router from "@/router";
import bot from "@/config/bot"
import random from "@/config/random"

export default defineComponent({
  name: "QuestionView",
  data: function() {
    return {
      images, router, bot, random,
      id: this.$route.params.id,
      questionData: questionsData[this.$route.params.id - 1],
      questionImage: images[`q${this.$route.params.id}`],

      answer: '',
      showFail: false,
    }
  },
  methods: {
    loadQuestion() {
      this.id = this.$route.params.id;
      this.questionData = questionsData[this.$route.params.id - 1];
      this.questionImage = images[`q${this.$route.params.id}`];
      this.answer = '';
      this.showFail = false;
    },

    getAnswer() {
      if (this.answer === this.questionData.correct || !this.questionData.correct) {
        this.showFail = false;

        if (this.id == 11) {
          this.router.push(`/end`);
          return;
        }

        bot.sendMessage(`Вопрос: ${this.questionData.text}. Ответ: ${this.answer}`);
        this.router.push(`/q/${Number(this.id) + 1}`);
      } else {
        this.showFail = true;

        this.questionImage = images[`fail${random.getRandomInt(3) + 1}`];
      }
    }
  },
  created() {
    if (!this.questionData) {
      this.router.push(`/nopage/${this.id-1}`);
    }

    if (!this.questionData.text) {
      this.router.push({ name: 'wait'});
    }
  }
})
</script>

<template>
  <w-flex column align-center class="px2 py12">
    <w-image :src="questionImage"/>

    <div
        class="title2 text-center mt4"
    >
      {{ questionData.text }}
    </div>

    <w-form>
      <w-input
          class="mt4"
          v-model="answer"
          outline
          label="Ответ"
      />
    </w-form>

    <w-flex class="gap4">
      <w-button
          xl
          class="mt12 pa8"
          @click="router.push(`/nogift/${this.id}`)"
      >Получить подарок</w-button>

      <w-button
          xl
          class="mt12 pa8"
          @click="getAnswer()"
      >Дальше</w-button>
    </w-flex>

    <div class="caption mt4">
      Если кнопка не работает, обнови страницу после нажатия
    </div>

    <div
      class="error title3 mt6"
      v-if="showFail"
    >
      Неправильно!! Даю тебе еще один шанс!
    </div>
  </w-flex>
</template>

<style scoped>

</style>
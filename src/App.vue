<template>
  <div id="app">
    <d-r-header
        :message="headerMessage"
        class="py4"
    />
    <d-r-main/>
  </div>
</template>

<script>

import DRHeader from "@/components/layout/DRHeader.vue";
import DRMain from "@/components/layout/DRMain.vue";

export default {
  name: 'App',
  components: {
    DRMain,
    DRHeader
  },
  data: function (){
    return {
      headerMessage: 'Квест от Нутри'
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.w-app {font-family: 'Roboto', sans-serif;}
</style>

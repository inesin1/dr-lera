import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import router from "@/router";

createApp(App)
    .use(WaveUI, {
        theme: 'light'
    })
    .use(router)
    .mount('#app')

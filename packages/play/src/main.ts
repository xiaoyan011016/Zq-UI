import { createApp } from 'vue'
import '@zq-ui/theme/index.css'
import App from './App.vue'

import ZqUi from 'zq-ui' //对应core目录中的packages名


createApp(App).use(ZqUi).mount('#app')

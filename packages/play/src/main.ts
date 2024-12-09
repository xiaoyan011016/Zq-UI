import { createApp } from 'vue'
import App from './App.vue'

import ZqUi from 'zq-ui' //对应core目录中的packages名
import '@zq-ui/theme/index.css'


createApp(App).use(ZqUi).mount('#app')

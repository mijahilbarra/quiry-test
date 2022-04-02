import { createApp } from 'vue'
import {iniciarFirebase} from './config/firebase'
import App from './App.vue'
import Button from './components/uikit/Button.vue'
import Col from './components/uikit/Col.vue'
import Row from './components/uikit/Row.vue'
import Container from './components/uikit/Container.vue'

iniciarFirebase()

createApp(App)
.component("Button", Button)
.component("Col", Col)
.component("Row", Row)
.component("Container", Container)
.mount('#app')


import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HeaderVueVue from './components/global/HeaderVue.vue'

const app = createApp(App)

// With this, I can access use the component HeaderVue in every part of my application
app.component('HeaderVue', HeaderVueVue)

app.mount('#app')

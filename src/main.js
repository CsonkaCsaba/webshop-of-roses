import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

//import flags
import "/node_modules/flag-icons/css/flag-icons.min.css";

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faCartShopping,
    faEnvelope,
    faMagnifyingGlass,
    faPhone,
    faUser
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faBars,
    faCartShopping,
    faMagnifyingGlass,
    faEnvelope,
    faPhone,
    faUser
)

const app = createApp(App)

app
.use(router)

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

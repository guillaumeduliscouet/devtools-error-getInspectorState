import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin, defineStore } from 'pinia'
import VueRouter from 'vue-router'
import App from './App.vue'

export const useStoreA = defineStore({
    id: 'storeA',
    state: () => ({
        data: null,
    }),
    actions: {
        init() {
            this.data = ''
        },
    },
})

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)

const pinia = createPinia()

new Vue({
    render: (h) => h(App),
    pinia,
    router: new VueRouter(),
}).$mount('#app')

useStoreA().init()

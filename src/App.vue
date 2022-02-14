<template>
    <div>Hello</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { defineStore } from 'pinia'

export const useStoreB = defineStore({
    id: 'storeB',
    state: () => ({
        data: null,
    }),
    actions: {
        init() {
            this.data = ''
        },
    },
})

export const useStoreC = defineStore({
    id: 'storeC',
    state: () => ({
        data: null,
    }),
    actions: {
        init() {
            this.data = ''
        },
    },
})

export default defineComponent({
    name: 'App',
    setup() {
        useStoreB().init()
        useStoreC().init()
    },
})
</script>

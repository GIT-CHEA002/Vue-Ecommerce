// import { ref, computed } from 'vue'
// composition api

// import { defineStore } from 'pinia'
// import { P } from 'vue-router/dist/index-BQLwgiyK.js'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

// option API
export const useCounterStore = defineStore('counter', {
  // 1. State block
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})

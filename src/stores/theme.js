import { defineStore } from 'pinia'
import { ref } from 'vue'
// export const useTheme = defineStore('theme', {
//   state: () => {
//     return {
//       theme: localStorage.getItem('theme') || 'light',
//     }
//   },
//   actions: {
//     // init theme when open webapp
//     initTheme() {
//       document.documentElement.classList.toggle('dark', this.theme === 'dark')
//     },
//     // toggle the theme
//     toggleTheme() {
//       this.theme = this.theme === 'light' ? 'dark' : 'light'
//       localStorage.setItem('theme', this.theme)
//       document.documentElement.classList.toggle('dark', this.theme === 'dark')
//     },
//     // set the customize theme
//     setTheme(theme) {
//       this.theme = theme
//       localStorage.setItem('theme', theme)
//       document.documentElement.classList.toggle('dark', this.theme === 'dark')
//     },
//   },
// })
export const useTheme = defineStore('theme', () => {
  // state
  const theme = ref(localStorage.getItem('theme') || 'light')
  // action
  function initTheme() {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }
  function setTheme(newTheme) {
    theme.value = newTheme
    localStorage.setItem('theme', theme.value)
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }
  return {
    theme,
    initTheme,
    toggleTheme,
    setTheme,
  }
})

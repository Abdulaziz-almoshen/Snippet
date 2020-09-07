<template>
  <div class="container">
    <AppNavigation></AppNavigation>
    <nuxt></nuxt>
  </div>
</template>

<script>
import AppNavigation from '@/components/global/AppNavigation'
export default {
  components: {
    AppNavigation
  }
}
</script>

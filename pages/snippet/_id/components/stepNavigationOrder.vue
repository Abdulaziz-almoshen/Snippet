<template>
  <div>
    <nuxt-link class="block mb-s p-3 bg-blue-300 rounded-lg mr-2" :class="{'opacity-25 pointer-events-none': !step}"
               :to=" step ? {
                 query:{
                   step: step.uuid
                 }
               }:{} ">
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "stepNavigationOrder",
  props:{
    step:{
      required:true,
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <li v-for="(step,index) in steps " :key="index" class="mb-1">
      <nuxt-link
        :to="{query: {
          step: step.uuid
        }}"
        :class="{'font-bold': currentStep.uuid === step.uuid}"
      >
        {{ index + 1}}. {{ step.title || 'untitled step'}}
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "stepList",
  props:{
    steps:{
      required:true,
      type:Array
    },
    currentStep: {
      required: true,
      type:Object
    }
  }
}
</script>

<style scoped>

</style>

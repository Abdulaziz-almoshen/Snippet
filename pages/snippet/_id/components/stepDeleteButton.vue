<template>
  <div>
    <a href="#" class="block mb-s p-3 bg-red-300 rounded-lg mt-2 lg:mr-0 mr-2 order-first lg:order-last"
               title="Delete Snippet"
                @click.prevent="deleteStep"
               :to="{}">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "stepDeleteButton",
  props:{
    currentStep: {
      required:true,
    }
  },
  methods: {
    deleteStep() {
       this.$axios.$delete(`snippets/step/${this.currentStep.uuid}`)
         .then(response => {
         this.$emit('deleteStep',this.currentStep)
       })
         .catch(function (error) {
         })

    }
  }
}
</script>

<style scoped>

</style>

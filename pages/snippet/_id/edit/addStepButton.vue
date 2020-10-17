<template>
<div>
  <a href="#" class="block mb-s p-3 bg-blue-300 rounded-lg mt-2"
     @click.prevent="addStep"
  >
    <slot></slot>
  </a>
</div>
</template>

<script>
export default {
  name: "addStepButton",
  props:{
    snippet:{
      required:true,
      type:Object
    },
    currentStep:{
      required: true,
      type: Object
    },
    position: {
      type:String
    }
  },
  methods:{
    async addStep() {
      let step = await this.$axios.$post(`snippets/step/${this.snippet.uuid}`, {
        [this.position] : this.currentStep.uuid
      }).then((response) => {
        this.$emit('addNewStep',response.data)
      }, (error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>

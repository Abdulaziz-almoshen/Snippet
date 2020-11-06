<template>
  <div>
    <div class="flex flex-no-wrap justify-between items-center bg-white p-8 rounded-lg w-full mb-2"
    v-for="snippet in snippets"
     :key="snippet.uuid"
    >
      <div class="mr-8 mb-2 text-xl leading-snug">
        <nuxt-link
          class="text-gray-600"
        :to="{
          name:'snippet-id',
          params:{
                id: snippet.uuid
                 }
        }"
        >

        {{ snippet.title || `Untitled Snippet`}}
        </nuxt-link>
      </div>
      <div class=" text-gray-500 mr-6 font-medium ">
        {{ snippet.steps_count}} steps
      </div>
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnippetCard",
  props:{
    snippets:{
      required:true,
      type:Array
    }
  }
}
</script>

<style scoped>

</style>

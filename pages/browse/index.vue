<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container py-10 pb-16">
        <h2 class="text-4xl text-gray-700 font-medium leading-tight mb-4">
          Browse
        </h2>
      </div>
    </div>
    <div class="container">
      <h1 class="text-xl text-gray-600 font-medium mb-6">
        All Snippets {{ snippets.length}}
      </h1>
    <SnippetCard
      :snippets="snippets"
    >
      <nuxt-link
      :to="{
      name:{}
      }"
      >
        Alex
      </nuxt-link>
    </SnippetCard>
    </div>
  </div>
</template>

<script>
import SnippetCard from "@/components/global/snippet/SnippetCard";
export default {
  async asyncData ({ app }) {
    let snippets = await app.$axios.$get('snippets/allsnippets')
    return{
      snippets: snippets.data
    }
  },
  data(){
    return{
      snippets:[]
    }
  },
  components: {
    SnippetCard
  }
}
</script>

<style scoped>

</style>

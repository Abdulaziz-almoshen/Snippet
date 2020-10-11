<template>
<div class="container mt-16">
    <div class="flex justify-between">
        <h1 class="text-xl text-gray-600 font-medium">
            Your snippet is (1)
        </h1>
      <a class="" href="" @click.prevent="createSnippet">
          + create new snippet
      </a>
    </div>

</div>
</template>

<script>
export default {
  name: "index",
  methods:{
    async createSnippet() {
      let snippet = await  this.$axios.$post('snippets')
      this.$router.push({
        name: 'snippet-id-edit', params: {id: snippet.data.uuid}
      })

    }
  }
}
</script>

<style scoped>

</style>

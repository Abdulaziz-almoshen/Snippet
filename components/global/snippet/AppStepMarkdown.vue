<template>
  <div v-html="compiledMarkdown">
  </div>
</template>

<script>
import 'highlight.js/styles/github.css';
import  hljs from 'highlight.js' // https://highlightjs.org/
var marked = require('markdown-it')({
  highlight(str, lang) {
    let escape = marked.utils.escapeHtml
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs language-' + lang.toLowerCase()+ '"><code>' + hljs.highlightAuto(escape(str)).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + escape(str) + '</code></pre>';

  }
});
export default {
  name: "AppStepMarkdown",
  props:{
    value:{
      required:false
    }
  },
  computed: {
    compiledMarkdown: function() {
      var result = marked.render(this.value)
      return result;
    }
  },
}

</script>

<style scoped>

</style>

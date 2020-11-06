<template>
  <div>
    <textarea
              v-model="step.body"
              onresize="false"
              ref="editor">
    </textarea>
    <div class="bg-white p-8 rounded-lg text-gray-600 ">
      <AppStepMarkdown
        :value="step.body"
      >
      </AppStepMarkdown>
    </div>
  </div>
</template>

<script>
import AppStepMarkdown from "@/components/global/snippet/AppStepMarkdown";
export default {
  name: "SnippetEditor",
  components: {
    AppStepMarkdown
  },
  props:{
    step:{
      required:true,
      type:Object
    }
  },
  data() {
    return {
      Editor: null
    }
  },
  watch:{
    'step.uuid' (){
      this.document.setValue(this.step.body)
    }
  },
  //
  mounted() {
    let CodeMirror = require('codemirror')
    this.Editor = CodeMirror.fromTextArea(this.$refs.editor,
    {
      indentUnit: 2,
      indentWithTabs: false ,
      extraKeys: {"Shift-Tab": "indentLess"},
      autoCloseTags: true,
      theme: 'monokai'

    })
    this.document.setValue(this.step.body)
    this.document.on('change', (doc) =>{
      this.$emit('input', doc.getValue())
    })
  },
  methods: {

  },
  computed:{
    document(){
      return this.Editor.getDoc()
    }
  }
}
</script>

<style scoped lang="css">

</style>

<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container py-10 pb-16">
        <div class="w-10/12">
          <input
            placeholder="Untitled Snippet"
            value=""
            class="text-4xl text-gray-700 font-header leading-tight w-full block p-2 border-2
            rounded border-dashed"
              v-model="snippet.title"
          >
            Snippet Title
          <div class="text-gray-700">
            <nuxt-link :to="{}">
              Created By
              {{ $auth.user.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <input class="text-xl text-gray-600 font-medium mb-6 w-full block border-2
            rounded border-dashed"
             v-model="currentStep.title"
            placeholder="Step Title">
      <div class="flex lg:flex-no-wrap flex-wrap">
        <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-no-wrap justify-between items-start mb-8 ">
          <div class="order-first ">
            <stepNavigationOrder
              :step="previousStep"
            >
              <div class="fill-current text-white h-6" v-html="IconLeft"></div>
            </stepNavigationOrder>
            <addStepButton
              :currentStep="currentStep"
              :snippet="snippet"
              @addNewStep="handleNewStep"
              position="before"

            >
              <div class="fill-current text-white h-6 " v-html="IconPlus"></div>
            </addStepButton>
          </div>
          <div class="w-full lg:mr-2">
            <textarea class=" text-gray-500 w-full border-gray-500 border-dashed border-2 border-lg"
                      v-model="currentStep.body"
                      onresize="false">

            </textarea>
            <div class="bg-white p-8 rounded-lg text-gray-600 ">
              Markdown content
            </div>
          </div>
          <div class="order-first flex flex-row lg:flex-col lg:order-last">
            <stepNavigationOrder
              :step="nextStep"
            >
              <div class="fill-current text-white h-6" v-html="IconRight"></div>
            </stepNavigationOrder>
            <addStepButton
            :currentStep="currentStep"
            :snippet="snippet"
            @addNewStep="handleNewStep"
            position="after"

            >
              <div class="fill-current text-white h-6 " v-html="IconPlus"></div>

            </addStepButton>
            <nuxt-link class="block mb-s p-3 bg-red-300 rounded-lg mt-2 lg:mr-0 mr-2 order-first lg:order-last"
                       title="Delete Snippet"
                       :to="{}">
              <div class="fill-current text-white h-6" v-html="IconDelet"></div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full lg:w4/12">
          <div class="mb-8">
            <h1 class="text-xl text-gray-600 font-medium mb-6">
              Steps
            </h1>
            <ul>
              <stepList
              :steps="orderedStepsAsc"
              :currentStep="currentStep"
              />
            </ul>
          </div>
          <div class="text-gray-500 text-sm">
            Use ctrl + shift + left or right on your keyboard to navigate between steps.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'
import { orderBy as _orderBy } from 'lodash'
import { debounce as _debounce } from 'lodash'
import stepList from "@/pages/snippet/_id/components/stepList";
import stepNavigationOrder from "@/pages/snippet/_id/components/stepNavigationOrder";
import browsSnippet from "@/mixins/snippet/browsSnippet";
import addStepButton from "@/pages/snippet/_id/edit/addStepButton";
export default {
  name: "index",
  components:{
    stepList,stepNavigationOrder,addStepButton
  },
  async asyncData({ app, params}) {
    let snippet = await app.$axios.$get(`snippets/${params.id}`)
    return {
      snippet: snippet.data,
      steps: snippet.data.step.data
    }
  },
  data(){
    return{
      left: 'arrow-left',
      right: 'arrow-right',
      delete: 'delete',
      plus: 'plus',
      snippet: null,
      steps: [],

    }
  },
  mixins: [
    browsSnippet
  ],
  head(){
    return {
      title: `editing ${this.snippet.title}`
    }
  },
  watch: {
    'snippet.title': {
      handler: _debounce( async function (title){
        await this.$axios.$patch(`snippets/${this.snippet.uuid}`, {
          title
        })
      },500)
    },
    'currentStep' : {
      deep: true,
      handler: _debounce(async function (step){
        await this.$axios.$patch(`snippets/step/${step.uuid}`, {
          title : step.title,
           body : step.body
        })
      }, 500)
    }
  },
  methods: {
    handleNewStep(step) {
      this.steps.push(step)
    }
  }
}
</script>


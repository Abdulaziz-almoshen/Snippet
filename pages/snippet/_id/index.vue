<template>
  <div>
    <div class="bg-white mb-16">
      {{currentStepIndex}}
      <div class="container py-10 pb-16">
        <div class="w-10/12">
          <h1 class="text-4xl text-gray-700 font-medium tracking-tight mb-4">
            {{ snippet.title }}
          </h1>
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
      <h1 class="text-xl text-gray-600 font-medium mb-6">
        {{ currentStepIndex +1 }}/{{steps.length}}. {{ currentStep.title}}
      </h1>
      <div class="flex lg:flex-no-wrap flex-wrap">
        <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-no-wrap justify-between items-start mb-8 ">
          <div class="order-first ">
            <stepNavigationOrder
            :step="previousStep"
            >
              <div class="fill-current text-white h-6" v-html="IconLeft"></div>
            </stepNavigationOrder>
          </div>
          <div class="bg-white p-8 rounded-lg text-gray-600 w-full lg:mr-2">
            {{ currentStep.body}}
          </div>
          <div class="order-first flex flex-row lg:flex-col lg:order-last">
            <stepNavigationOrder
              :step="nextStep"
            >
              <div class="fill-current text-white h-6" v-html="IconRight"></div>
            </stepNavigationOrder>
            <nuxt-link class="block mb-s p-3 bg-blue-300 rounded-lg mt-2 lg:mr-0 mr-2 order-first lg:order-last"
                       title="Edit Snippet"
                       :to="{
                        name: 'snippet-id-edit',
                        params:{
                             id: snippet.uuid
                        }
                       }">
              <div class="fill-current text-white h-6" v-html="IconEdit"></div>
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
            Use ctrl + shift + left or right on your keyboard to navigate between steps
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'
import stepNavigationOrder from "@/pages/snippet/_id/components/stepNavigationOrder";
import stepList from "@/pages/snippet/_id/components/stepList";
import browsSnippet from "@/mixins/snippet/browsSnippet";

import { orderBy as _orderBy } from 'lodash'
export default {
  async asyncData({ app, params}) {
    console.log('fuck')
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
    edit: 'edit',
    steps: [],
    snippet: null

  }
  },
  mixins: [
    browsSnippet
  ],
  components:{
   stepNavigationOrder,stepList
  },

}
</script>


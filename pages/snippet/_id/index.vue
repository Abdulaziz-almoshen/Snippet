<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container py-10 pb-16">
        <div class="w-10/12">
          <h1 class="text-4xl text-gray-700 font-medium tracking-tight mb-4">
            Snippet Title
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
        1/1. step title
      </h1>
      <div class="flex lg:flex-no-wrap flex-wrap">
        <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-no-wrap justify-between items-start mb-8 ">
          <div class="order-first ">
            <nuxt-link class="block mb-s p-3 bg-blue-300 rounded-lg mr-2"
                       :to="{}">
              <div class="fill-current text-white h-6" v-html="IconLeft"></div>
            </nuxt-link>
          </div>
          <div class="bg-white p-8 rounded-lg text-gray-600 w-full lg:mr-2">
            Markdown content
          </div>
          <div class="order-first flex flex-row lg:flex-col lg:order-last">
            <nuxt-link class="block mb-s p-3 bg-blue-300 rounded-lg "
                      :to="{}">
              <div class="fill-current text-white h-6 " v-html="IconRight"></div>
            </nuxt-link>
            <nuxt-link class="block mb-s p-3 bg-blue-300 rounded-lg mt-2 lg:mr-0 mr-2 order-first lg:order-last"
                       title="Edit Snippet"
                       :to="{}">
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
              <li v-for="(steps,index) in 5 " :key="index" class="mb-1">
                <nuxt-link
                  to="{}"
                :class="{'font-bold': index === 0}"
                >
                  {{ index + 1}} Step title
                </nuxt-link>
              </li>
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
export default {

  data(){
  return{
    left: 'arrow-left',
    right: 'arrow-right',
    edit: 'edit',

  }
  },
  computed: {
    IconLeft: function () {
      return feather.toSvg(this.left)
    },
    IconRight: function () {
      return feather.toSvg(this.right)
    },
    IconEdit: function () {
      return feather.toSvg(this.edit)
    }
  },
}
</script>


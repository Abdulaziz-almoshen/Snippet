<template>
<div class="container mt-16">
    <form action="#" @submit.prevent="signIn"  class="w-full max-w-sm items-center">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 :class="{'text-red-500' : validation.email}"
                 for="inline-full-name">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 :class="{'border-red-200' : validation.email}"
                 id="inline-full-name"
                 type="email"
                 placeholder="your email"
                 v-model="form.email">
          <div v-if="validation.email" class="text-red-500 mb-1 mt-1 text-sm">
            {{validation.email[0]}}
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 :class="{'text-red-500' : validation.password}"
                 for="inline-password">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 :class="{'border-red-200' : validation.password}"
                 id="inline-password"
                 type="password"
                 v-model="form.password"
                 placeholder="******************">
          <div v-if="validation.password" class="text-red-500 mb-4 mt-1 text-sm">
              {{validation.password[0]}}
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <nuxt-link
          :to="{name: 'auth-signup'}"
          class="text-sm">
          no account! SignUp
        </nuxt-link>
        </label>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
</div>
</template>

<script>
export default {

  data(){
    return{
      form:{
        email:'',
        password:''
      },
      validation:{}
    }
  },
  methods:{
      async signIn () {
        try {
          await this.$auth.loginWith('local', {
            data: this.form
          })
        } catch (e) {
          console.log(e.response)
          if (e.response.status === 422) {
            this.validation = e.response.data.errors
          }
        }
      }
  }
}
</script>



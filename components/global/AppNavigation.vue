<template>
  <div class="bg-white py-8 lg:py-0 flex items-center">
    <div class="container flex flex-wrap items-center lg:flex-no-wrap">
      <nuxt-link
        :to="{ name: 'home'}"
      class="mr-10 flex-shrink-0"
      >
        <img  src="https://static1.squarespace.com/static/52de0a96e4b0c593abb9a525/t/58cb3ca9b3db2bbcdc3c91ce/1572279118262/?format=750w" alt="" class=" w-40">
      </nuxt-link>

      <a href="#" @click.prevent="MobileNavOpen = !MobileNavOpen" class="lg:hidden w-auto relative flex flex-col justify-center">
        <span class="bg-blue-500 h-1 w-8 rounded mb-1"></span>
        <span class="bg-blue-500 h-1 w-8 rounded mb-1"></span>
        <span class="bg-blue-500 h-1 w-8 rounded mb-1"></span>
      </a>

      <div
        class="w-full flex"
        :class="{'hidden lg:flex': !MobileNavOpen,
                 'mt-8': MobileNavOpen}">
        <ul class="lg:h-24 lg:flex items-center w-full lg:w-auto">
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 lg:py-8 lg:px-4"
            >
              Browse
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 lg:py-8 lg:px-4"
            >
              Search
            </nuxt-link>
          </li>
        </ul>
        <ul class="lg:h-24 lg:flex items-center ml-auto text-right w-full lg:w-auto">
          <template v-if="$auth.loggedIn">
            <li>
              <nuxt-link
                :to="{ name: 'dashboard'}"
                class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >
                Dashboard
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'home'}"
                class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >
                {{ $auth.user.name }}
              </nuxt-link>
            </li>
            <li>
              <a href="#" @click.prevent="logout"
                class="text-lg text-gray-700 lg:py-8 lg:px-4"
                >
                Logout
              </a>
            </li>
          </template>
          <template v-if="!$auth.loggedIn">
            <li>
              <nuxt-link
                :to="{ name: 'auth-signin'}"
                class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >
                Sign in
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'home'}"
                class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >
                Sign up
              </nuxt-link>
            </li>
        </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "AppNavigation",

  data(){
    return {
      MobileNavOpen: false
    }
  },
  methods:{
    async logout(){
      await this.$auth.logout()
    }
  }
}
</script>

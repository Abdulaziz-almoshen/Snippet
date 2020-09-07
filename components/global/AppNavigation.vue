<template>
  <div class="bg-white flex items-center">
    <div class="container flex flex-wrap items-center lg:flex-no-wrap">
      <nuxt-link
        :to="{ name: 'home'}"
      class="mr-10 flex-shrink-0"
      >
        <img  src="https://static1.squarespace.com/static/52de0a96e4b0c593abb9a525/t/58cb3ca9b3db2bbcdc3c91ce/1572279118262/?format=750w" alt="" class=" w-40">
      </nuxt-link>
      <div class="w-full flex">
        <ul class="h-24 flex items-center">
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Browse
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Search
            </nuxt-link>
          </li>
        </ul>
        <ul class="h-24 flex items-center ml-auto text-right">
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Dashboard
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Abdulaziz
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Sign in
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Create an account
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            :to="{ name: 'home'}"
            class="text-lg text-gray-700 py-8 px-4"
            >
              Logout
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavigation"
}
</script>

<style scoped>

</style>

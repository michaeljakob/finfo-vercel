<template>
  <div class="text-center">

    <nuxt-link to="/" >
      <Logo
        class="mx-auto w-16"
      />
    </nuxt-link>
    
    <div class="text-center max-w-2xl mx-auto">
      <nuxt />
    </div>

    <footer
        class="px-8 py-20 text-gray-300 text-sm"
      >
      <ul>
        <li class="float-left p-4 px-8"><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li class="float-left p-4 px-8"><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
      </ul>
    </footer>
    
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>

<template>
  <div class="">

    <nuxt-link
      to="/"
    >
      <Logo />
    </nuxt-link>
    
    <div class="max-w-6xl mx-auto md:px-12 lg:px-0">
      <nuxt />
    </div>

    <footer
        class="py-48 text-sm max-w-screen-xl mx-auto"
      >
      <ul>
        <li class="float-left p-4 px-8"><nuxt-link :to="localePath('/imprint')">{{ $t('imprint') }}</nuxt-link></li>
        <li class="float-left p-4 px-8"><nuxt-link :to="localePath('/privacy')">{{ $t('privacy') }}</nuxt-link></li>
        <li class="float-left mt-4 mx-8 border-b border-black"><LanguageInput /></li>
      </ul>
    </footer>
    
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue'
import LanguageInput from '@/components/LanguageInput'

export default {
  components: {
    Logo,
    LanguageInput
  }
}
</script>

<style>

</style>

<template>
  <div class="text-center">

    <nuxt-link to="/" >
      <Logo
        class="mx-auto w-16"
      />
    </nuxt-link>

    <nuxt />
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

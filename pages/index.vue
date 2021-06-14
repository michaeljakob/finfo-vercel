<template>
  <div>
    <div class="px-2">

      <Signup
        class="py-8" />

      <div class="text-center inline-block">
        <h2 class="text-2xl pb-4 font-bold text-primary">Jeden Morgen um 6:00<br>Nur das Wichtigste</h2>
        <!-- <img
          class="my-4"
          src="@/assets/images/sample.png"
          title="finfo - der profitabelste Newsletter Deutschlands"
          alt="finfo - der profitabelste Newsletter Deutschlands"
        /> -->

        <video width="480" height="320" autoplay playsinline loop muted preload>
          <source src="@/assets/images/finfo-sample.mp4" type="video/mp4">
        </video>

        

        <a
          href="https://us12.campaign-archive.com/home/?u=17990761a9cf4f4ba7aa4d7da&id=7767ea2372"
          target="_blank"
          class="inline-block text-white bg-gray-400 my-2 px-4 py-2 font-bold rounded-lg shadow focus:outline-none focus:ring"
          >Unsere letzten finfos →</a>

      </div>

      <div class="my-24">
        <span class="text-6xl font-bold font-serif block">“</span>
        <span>Mashallah, das ist der krasseste, heftigste, einfach ehrenhafteste Newsletter der Welt</span>
        <span class="text-gray-500 block text-right py-2">— jeder, immer, überall</span>
      </div>

      <Signup />

    </div>
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'

export default {
  components: {
    Signup
  }
}
</script>

<style scoped>


</style>

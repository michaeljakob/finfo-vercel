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

      <div class="podcast-banner my-2 bg-gray-50 mb-24 p-4 inline-block">
        <div class="text-6xl my-4">🤯 🎉 🥳</div>
        
        <a
          href="https://open.spotify.com/show/0lRbmuzSZJ80E7j3LHlbzA?si=44349451ca7f4cb8">
          <img
            src="@/assets/images/podcast-finfo-logo.png" />
        </a>
        <div class="my-4">
          Jeden Wochentag um 6:00 auf Spotify, Apple, Amazon und Google Music
        </div>

        <div class="row">
          <div class="column text-left">
            <a
              href="https://open.spotify.com/show/0lRbmuzSZJ80E7j3LHlbzA?si=44349451ca7f4cb8">
              <img
              class="h-10 inline-block mt-4"
              src="@/assets/images/podcast-spotify.png" />
            </a>
          </div>
          <div class="column">
            <a
              href="https://podcasts.apple.com/us/podcast/finfo-—-der-profitabelste-podcast-deutschlands/id1590822532">
              <img
              class="h-10 inline-block mt-4"
              src="@/assets/images/podcast-apple.png" />
            </a>
          </div>
        </div>

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
.podcast-banner {
  max-width: 70%;
}
.row {
  display: flex;
}
.column {
  flex: 50%;
}
</style>

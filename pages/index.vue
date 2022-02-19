<template>
  <div>
    <div class="px-2">

      <div
        id="headerbox"
        class="py-8 lg:py-16"
        :class="'lang-' + this.$i18n.locale"
      >
        <Signup
          class="py-8 inline-block"
        />

        <div class="inline-block">
          <img
            class="my-4 lg:hidden"
            :src="`https://superfinfo.com/finfo-header-${this.$i18n.locale}.png`"
          />
        </div>
      </div>

      <a
        :href="$t('link-finfo-archive')"
        target="_blank"
        class="table mx-auto text-white bg-gray-400 my-2 px-4 py-2 font-bold rounded-lg shadow focus:outline-none focus:ring cursor-pointer no-underline"
        >{{ $t('latest-finfos') }} →</a>

      <div class="my-44 max-w-prose mx-auto">
        <span class="text-8xl font-bold font-serif block text-center">“</span>
        <span class="text-2xl">{{ $t('quote') }}</span>
        <span class="text-2xl font-bold block text-right py-4">— {{ $t('quote-author') }}</span>
      </div>

      <div
        v-if="hasPodcast"
        class="my-16 mb-24 p-8 pt-4 text-center block max-w-prose mx-auto"
      >
        <div class="font-bold text-primary text-5xl lg:text-8xl my-8">{{ $t('podcast-nr-one') }}</div>
        <div class="text-3xl my-4 font-bold">{{ $t('podcast-heading') }}</div>
        
        <div class="my-4">
          {{ $t("podcast-text") }}
        </div>

        <div class="row">
          <div class="column text-center">
            <a
              :href="$t('podcast-link-spotify')">
              <img
              class="h-8 sm:h-10 md:h-14 inline-block mt-4 px-1 md:px-0"
              src="@/assets/images/podcast-spotify.png" />
            </a>
          </div>
          <div class="column text-center">
            <a
              :href="$t('podcast-link-apple')">
              <img
              class="h-8 sm:h-10 md:h-14 inline-block mt-4 px-1 md:px-0"
              src="@/assets/images/podcast-apple.jpg" />
            </a>
          </div>
        </div>

      </div>

      <SignupLean class="py-20" />

    </div>
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'
import SignupLean from '@/components/SignupLean.vue'

export default {
  components: {
    Signup,
    SignupLean
  },
  computed: {
    hasPodcast() {
      return this.$i18n.locale == 'de';
    }
  },
  methods: {
  },
  head() {
    return {
      title: this.$t('htmltitle'),
    }
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.column {
  flex: 50%;
}

@media screen and (min-width: 1024px) {
  #headerbox {
    background-position: right bottom;
    background-size: auto 90%;
    background-repeat: no-repeat;

    &.lang-de {
      background-image: url(https://superfinfo.com/finfo-header-de.png);
    }
    &.lang-nl {
      background-image: url(https://superfinfo.com/finfo-header-nl.png);
    }
    &.lang-es {
      background-image: url(https://superfinfo.com/finfo-header-es.png);
    }
    &.lang-fr {
      background-image: url(https://superfinfo.com/finfo-header-fr.png);
    }
    &.lang-it {
      background-image: url(https://superfinfo.com/finfo-header-it.png);
    }
  }
}
</style>

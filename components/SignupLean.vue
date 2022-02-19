<template>
  <div>
    <h2 class="text-3xl text-center font-bold py-8">{{ $t('signup-cta-heading') }}</h2>


    <div class="signup py-4 text-center">
      <mailchimp-subscribe
        :url="mailchimp().url" 
        :user-id="mailchimp().user" 
        :list-id="mailchimp().list"
        @error="onError"
        @success="onSuccess"
      >
        <template v-slot="{ subscribe, setEmail, error, success, loading }">
          <form @submit.prevent="subscribe">
            <input
              class="border border-black rounded-lg py-2 px-2 focus:outline-none focus:ring shadow"
              type="email"
              name="EMAIL"
              :placeholder="$t('email-placeholder')"
              @input="setEmail($event.target.value)" />
            <button
              class="text-white bg-primary px-4 py-2 font-bold rounded-lg shadow focus:outline-none focus:ring"
              type="submit">{{ $t('signup-cta') }} →</button>
            <div class="status py-4">
              <div v-if="error" v-html="error"></div>
              <div v-if="success">{{ $t('signup-success-message') }}</div>
              <div v-if="loading">wait for it…</div>
            </div>
          </form>
        </template>
      </mailchimp-subscribe>
    </div>
  </div>
</template>
<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe
  },
  methods: {
    onError() {
      return;
    },
    onSuccess() {
      return;
    },
    mailchimp() {
      const language = this.$i18n.locale;
      switch(language) {
        case 'nl':
          return {
            url: 'https://superfinfo.us20.list-manage.com/subscribe/post-json',
            user: '7555d044ea1c0b314f3a14cbd',
            list: 'e999ae88a8',
          };
        case 'fr':
          return {
            url: 'https://superfinfo.us20.list-manage.com/subscribe/post-json',
            user: '7555d044ea1c0b314f3a14cbd',
            list: '589c42b7a2',
          };
        case 'it':
          return {
            url: 'https://superfinfo.us20.list-manage.com/subscribe/post-json',
            user: '7555d044ea1c0b314f3a14cbd',
            list: '007a207636',
          };
        case 'es':
          return {
            url: 'https://superfinfo.us20.list-manage.com/subscribe/post-json',
            user: '7555d044ea1c0b314f3a14cbd',
            list: '23abb4aeea',
          };
        default: // de
          return {
            url: 'https://superfinfo.us12.list-manage.com/subscribe/post-json',
            user: '17990761a9cf4f4ba7aa4d7da',
            list: '7767ea2372',
          };
      }
    }
  },
}
</script>

<style scoped>
input {   
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

</style>

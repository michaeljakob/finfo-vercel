<template>
  <div>
    <h1 class="text-4xl lg:text-5xl lg:max-w-xl font-bold">{{ $t('heading') }}</h1>
    <h2 class="py-8 max-w-md">{{ $t('sub-heading') }}</h2>

    <div class="signup py-4">
      <!-- <mailchimp-subscribe
        url="https://superfinfo.us12.list-manage.com/subscribe/post-json" 
        user-id="17990761a9cf4f4ba7aa4d7da" // USER ID NL 7555d044ea1c0b314f3a14cbd
        list-id="7767ea2372" // Audience ID NL e999ae88a8
        @error="onError"
        @success="onSuccess"
      > -->
      <!-- https://superfinfo.us20.list-manage.com/subscribe -->
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
              autofocus="autofocus"
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
      switch(language) {
        case 'nl':
          return {
            link: 'https://superfinfo.us20.list-manage.com/subscribe/post-json',
            user: '7555d044ea1c0b314f3a14cbd',
            list: 'e999ae88a8',
          };
        default: // de
          return {
            link: 'https://superfinfo.us12.list-manage.com/subscribe/post-json',
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

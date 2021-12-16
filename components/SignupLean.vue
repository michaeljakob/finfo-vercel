<template>
  <div>
    <!-- <h1 class="text-4xl lg:text-5xl lg:max-w-xl leading-tight font-bold">{{ $t('heading') }}</h1> -->
    <!-- <h2 class="py-4 max-w-md">Der 3-Minuten Newsletter mit erfrischenden Investment-Ideen für deinen renditegefüllten Start in den Tag.</h2> -->

    <h2 class="text-3xl text-center font-bold py-8">Gönn dir finfo 🚀</h2>


    <div class="signup py-4 text-center">
      <mailchimp-subscribe
        url="https://superfinfo.us12.list-manage.com/subscribe/post-json"
        user-id="17990761a9cf4f4ba7aa4d7da"
        list-id="7767ea2372"
        @error="onError"
        @success="onSuccess"
      >
        <template v-slot="{ subscribe, setEmail, error, success, loading }">
          <form @submit.prevent="subscribe">
            <input
              class="border border-black rounded-lg py-2 px-2 focus:outline-none focus:ring shadow"
              type="email"
              name="EMAIL"
              placeholder="deine@email.de"
              @input="setEmail($event.target.value)" />
            <button
              class="text-white bg-primary px-4 py-2 font-bold rounded-lg shadow focus:outline-none focus:ring"
              type="submit">Anmelden →</button>
            <div class="status py-4">
              <div v-if="error" v-html="error"></div>
              <div v-if="success">Yay 🎉🎉🎉<br>Bitte Email bestätigen. Wir haben dir gerade nen Link geschickt 💚</div>
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

<template>
  <div>
    <h1 class="text-2xl font-bold">Melde dich bei finfo an 💸</h1>
    <div class="signup py-4">

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
              class="border rounded-lg py-2 px-2 focus:outline-none focus:ring shadow"
              type="email"
              name="EMAIL"
              placeholder="deine@email.de"
              @input="setEmail($event.target.value)" />
            <button
              class="text-white bg-primary px-4 py-2 font-bold rounded-lg shadow focus:outline-none focus:ring"
              type="submit">Anmelden →</button>
            <div class="status py-4">
              <div v-if="error">{{ error }}</div>
              <div v-if="success" class="font-bold">Yay 🎉🎉🎉<br>Morgen 6:00 kommt der erste Marktbericht 💚</div>
              <div v-if="loading">Wait for it…</div>
            </div>
          </form>
        </template>
      </mailchimp-subscribe>

      <div class="py-4">
        <span class="font-bold">finfo</span> ist der tägliche Newsletter, der die Börse vereinfacht. Wir filtern den Müll raus und erklären das, was wirklich wichtig ist — kurz, knapp und unterhaltsam.
      </div>
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

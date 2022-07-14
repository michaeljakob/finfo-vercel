<template>
  <div class="my-16 mx-2 max-w-2xl lg:mx-auto pre text-left">
    <h1 class="text-4xl font-bold my-8">
      {{ $t('imprint') }}
    </h1>

    <div>
      AlleAktien GmbH<br>
      Department finfo<br>
      Helene-Mayer-Ring 4<br>
      80809 Munich<br>
      Germany
    </div>
    <br>
    <div>
      Commercial Registry: HRB269475<br>
      Register Court: District Court Munich, Germany<br>
      Chief Executive Officer: Michael C. Jakob<br>
      VAT Identification Number: DE347360150<br>
    </div>
    <br><br>
    <h2 class="font-bold py-8">{{ $t('imprint-contact') }}</h2>
    <div>
      Partnerschaftsanfragen<br>
      info@superfinfo.com<br>
      +49 170 3141588
    </div>

    <div class="my-24">
      <nuxt-link
        to="/"
        class="text-white bg-primary px-12 py-4 font-bold rounded-lg shadow focus:outline-none focus:ring"
      >
        ← {{ $t('back-to-finfo')}}
      </nuxt-link>
    </div>

  </div>
</template>
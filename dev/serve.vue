<script>
import { defineComponent } from 'vue';
import VueUtterances from '@/vue-utterances.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueUtterances
  }
});
</script>

<template>
  <div id="app">
    <vue-utterances repo="khalby786/vue-utterances" theme="github-dark"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueUtterances from '@/vue-utterances.vue';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return {
      // theme variable binded to the property of the same name
      theme: "github-dark",  
    };
  },
  components: {
    VueUtterances
  },
  mounted() {
    // after 5 seconds, change theme to github-light
    setTimeout(() => {
      this.theme = 'github-light';
    }, 5000);
  }
});
</script>

<template>
  <div id="app">
    <vue-utterances repo="khalby786/vue-utterances" :theme="theme"/>
  </div>
</template>

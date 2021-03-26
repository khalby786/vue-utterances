<script>
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: 'VueUtterances', // vue component name
  data() {
    return {
      
    };
  },
  props: {
    repo: {
      type: String,
      default: "[ENTER REPO HERE]",
      required: true
    },
    issueTerm: {
      type: String,
      default: "pathname"
    },
    theme: {
      type: String,
      default: "github-light"
    },
  },
  mounted() {
    let utterances = document.createElement("script");

    utterances.async = true;
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", this.repo);
    utterances.setAttribute("issue-term", this.issueTerm);
    utterances.setAttribute("theme", this.theme);
    utterances.setAttribute("crossorigin", "anonymous");

    this.$refs.vueUtterances.appendChild(utterances);
  }
});
</script>

<template>
  <div class="vue-utterances" ref="vueUtterances">
    <!-- utterances script here -->
  </div>
</template>

<style scoped>

</style>

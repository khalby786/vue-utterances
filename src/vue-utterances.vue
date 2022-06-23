<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "VueUtterances", // vue component name
  data() {
    return {};
  },
  props: {
    repo: {
      type: String,
      default: "[ENTER REPO HERE]",
      required: true,
    },
    issueTerm: {
      type: String,
      default: "pathname",
    },
    theme: {
      type: String,
      default: "github-light",
    },
    label: {
      type: String,
      default: "",
    }
  },
  mounted() {
    let utterances = document.createElement("script");

    utterances.async = true;
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", this.repo);
    utterances.setAttribute("issue-term", this.issueTerm);
    if (this.label !== "") {
      utterances.setAttribute("label", this.label);
    }
    utterances.setAttribute("theme", this.theme);
    utterances.setAttribute("crossorigin", "anonymous");

    this.$refs.vueUtterances.appendChild(utterances);
  },
  watch: {
    theme: function(newTheme, oldTheme) {
      console.log(newTheme);
      console.log(oldTheme);
      this.$refs.vueUtterances.querySelector("iframe").contentWindow.postMessage(
        {
          type: "set-theme",
          theme: newTheme, // theme you want
        },
        "https://utteranc.es"
      );
    },
  }
});
</script>

<template>
  <div class="vue-utterances" ref="vueUtterances">
    <!-- utterances script here -->
  </div>
</template>

<style scoped></style>

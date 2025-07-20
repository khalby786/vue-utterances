<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from "vue";

const utterancesEl = ref<HTMLElement | null>(null);
const props = defineProps<{
  /** GitHub repo in the format owner/repo */
  repo: string;

  /** Issue mapping term (e.g., pathname, url, title, etc.) */
  issueTerm?: "issue" | "url" | "pathname" | "title" | "og:title" | string;

  /** Utterances theme */
  theme?:
    | "github-light"
    | "github-dark"
    | "preferred-color-scheme"
    | "github-dark-orange"
    | "icy-dark"
    | "dark-blue"
    | "photon-dark"
    | "boxy-light"
    | "gruvbox-dark"
    | string;

  /** Label for created issues */
  label?: string;
}>();

const loadUtterances = () => {
  if (utterancesEl.value) {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", props.repo);
    script.setAttribute("issue-term", props.issueTerm || "pathname");
    script.setAttribute("theme", props.theme || "github-light");
    script.setAttribute("label", props.label || "");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");

    script.onerror = () => {
      console.error("Failed to load utterances script.");
    };

    utterancesEl.value.appendChild(script);
  }
};

const reloadUtterances = () => {
  if (utterancesEl.value) {
    const utterances = utterancesEl.value.querySelector(".utterances");

    if (utterances) {
      utterances.remove();
    }

    loadUtterances();
  }
};

defineExpose({
  reload: reloadUtterances,
});

onMounted(() => {
  loadUtterances();
});

watch(
  () => [props.repo, props.issueTerm, props.theme, props.label],
  ([newRepo, newIssueTerm, newTheme, newLabel]) => {
    if (utterancesEl.value) {
      if (
        newRepo === props.repo &&
        newIssueTerm === props.issueTerm &&
        newLabel === props.label &&
        newTheme !== props.theme
      ) {
        utterancesEl.value.querySelector("iframe")?.contentWindow?.postMessage(
          {
            type: "set-theme",
            theme: newTheme,
          },
          "https://utteranc.es"
        );

        return;
      }

      reloadUtterances();
    }
  }
);
</script>

<template>
  <div class="utterances-wrapper" ref="utterancesEl">
    <!-- utterances script here -->
  </div>
</template>

<style scoped></style>

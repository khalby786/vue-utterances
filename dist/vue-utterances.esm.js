import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, withScopeId } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'VueUtterances',

  // vue component name
  data() {
    return {};
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
    }
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

const _withId = /*#__PURE__*/withScopeId("data-v-af521772");

pushScopeId("data-v-af521772");

const _hoisted_1 = {
  class: "vue-utterances",
  ref: "vueUtterances"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, null, 512);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-af521772";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueUtterances', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;

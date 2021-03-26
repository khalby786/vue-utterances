# vue-utterances 🔮

[![NPM](https://nodei.co/npm/vue-utterances.png)](https://npmjs.org/package/vue-utterances)

Vue.js component for 🔮 [utterances](https://utteranc.es/) 🔮

Utterances is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more. Read more at [https://utteranc.es/](https://utteranc.es/).

This package is under active development! If you encounter bugs, please open an issue at https://github.com/khalby786/vue-utterances/issues.

## Installation

```
npm i vue-utterances
```

**This package is compatible only with Vue 3.**

## Usage 

### Vue CLI (with a Bundler)

```vue
<template>
    <vue-utterances repo="khalby786/vue-utterances" theme="github-light" issue-term="pathname" />
</template>

<script>
import VueUtterances from "vue-utterances";

export default {
    ...

    components: {
        VueUtterances
    }

    ...
}
</script>
```

### Browser (with CDN)

```html
<div id="app">
    <vue-utterances repo="khalby786/vue-utterances" />
</div>
    
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdn.jsdelivr.net/gh/khalby786/vue-utterances@latest/dist/vue-utterances.min.js"></script>
```

```js
const app = {
  components: {
    VueUtterances
  }
}

Vue.createApp(app).mount("#app");
```

## Confession

I've never published a Vue component to NPM for public use and it's my first time. I followed [this](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/) tutorial to create this component package. I'm not familiar with the entire concept (*yet*), and I might be doing some things the wrong way, so if you feel like something needs correction or can be improved further, please create an issue/pull request!

## License

[MIT License](https://github.com/khalby786/vue-utterances/blob/main/LICENSE) - [Khaleel Gibran](https://khaleelgibran.com)
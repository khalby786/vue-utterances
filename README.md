# vue-utterances 🔮

Vue.js component for 🔮 [utterances](https://utteranc.es/) 🔮

Utterances is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more. Read more at [https://utteranc.es/](https://utteranc.es/).

### Installation

```
npm i vue-utterances
```

*Note*: **Package hasn't yet been published, this README contains possible future documentation. If you see this, it means that the package isn't ready for use, *yet*.**

### Expected Usage (and Results)

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

### License

[MIT License](https://github.com/khalby786/vue-utterances/blob/main/LICENSE) - [Khaleel Gibran](https://khaleelgibran.com)

# vue-utterances

> **Vue.js component for 🔮 utterances 🔮**

[Utterances](https://utteranc.es/) is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more.  

## Installation

For Vue 3, install the latest version:
```bash
npm install vue-utterances
```

## Usage

Import and register the component in your app or page:

```vue
<script setup>
import Utterances from 'vue-utterances';
</script>

<template>
  <Utterances
    repo="owner/repo"
    issueTerm="pathname"
    theme="github-light"
    label="comments"
  />
</template>
```

### Nuxt
Wrap with `<client-only>` to avoid SSR issues:

```vue
<template>
  <client-only>
    <Utterances repo="owner/repo" />
  </client-only>
</template>
```

## Props
| Name      | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| repo      | string   | GitHub repo in the format `owner/repo`           |
| issueTerm | string   | Issue mapping term (e.g., pathname, url, title)  |
| theme     | string   | Utterances theme                                 |
| label     | string   | Label for created issues                         |

## Methods
Expose `reload()` to reload the widget if needed:

```js
const utterancesRef = ref();
utterancesRef.value.reload();
```

## Development

Build the library:
```bash
npm run build
```

Test locally in another app:
```bash
npm link

# In your test app:
npm link vue-utterances
```

## License
[MIT](https://github.com/khalby786/vue-utterances/blob/main/LICENSE)

## Credits

- [Utterances](https://utteranc.es/) - The original comments widget
- [How to Create and Publish a Vue Component Library – Update](https://www.freecodecamp.org/news/how-to-add-comments-to-your-vue-js-app-with-utterances/)
- [jet-ui](https://github.com/sjmc11/jet-ui)
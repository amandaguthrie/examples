# examples: astro/markdoc-expressive-code

[Detailed explanation on blog](https://amandaguthrie.dev/post/astro-markdoc-expressive-code-1/)

Key files/config:
- `astro.config.mjs` - markdoc(), expressiveCode() integrations. 
- `src/components/Fence.astro` - intermediary component to map Markdoc data to Expressive Code component
- `markdoc.config.mjs` - replace fence node with custom component.  add attributes you want to use as props.
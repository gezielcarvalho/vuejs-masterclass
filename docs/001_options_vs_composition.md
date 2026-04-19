# Options API vs Composition API

## What did Vue 3 add?

- Built in TypeScript, a superset of JavaScript with types
- Decreased bundle size, faster rendering, and less memory usage
- The **Composition API**, a new way to build components

---

## Options API

The Options API organizes component logic into **predefined option properties** such as `data`, `methods`, `computed`, and `watch`. Each concern is split across these options.

```vue
<script>
export default {
  data() {
    return {
      count: 0,
      name: 'Vue'
    }
  },
  computed: {
    greeting() {
      return `Hello, ${this.name}!`
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  watch: {
    count(newVal) {
      console.log(`Count changed to ${newVal}`)
    }
  }
}
</script>
```

## Composition API

The Composition API organizes logic by **feature/concern** inside a `setup` function (or `<script setup>`). Related code stays together instead of being scattered across options.

```vue
<script setup>
import { ref, computed, watch } from 'vue'

const count = ref(0)
const name = ref('Vue')

const greeting = computed(() => `Hello, ${name.value}!`)

function increment() {
  count.value++
}

watch(count, (newVal) => {
  console.log(`Count changed to ${newVal}`)
})
</script>
```

---

## Key Differences

| Aspect             | Options API                           | Composition API                                 |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| **Organization**   | By option type (`data`, `methods`, …) | By logical concern / feature                    |
| **Reactivity**     | Implicit via `this`                   | Explicit via `ref()` / `reactive()`             |
| **Access pattern** | `this.count`                          | `count.value`                                   |
| **Code reuse**     | Mixins (can cause naming conflicts)   | Composable functions (plain JS)                 |
| **TypeScript**     | Limited type inference                | Full type inference                             |
| **Learning curve** | Easier for beginners                  | Requires understanding of reactivity primitives |

---

## Code Reuse: Mixins vs Composables

### Options API — Mixin

```js
// useCounterMixin.js
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

```vue
<script>
import useCounterMixin from './useCounterMixin'

export default {
  mixins: [useCounterMixin]
}
</script>
```

> **Problem:** If two mixins define the same `data` or `methods` property, they silently conflict.

### Composition API — Composable

```js
// useCounter.js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
}
```

```vue
<script setup>
import { useCounter } from './useCounter'

const { count, increment } = useCounter()
</script>
```

> **Advantage:** No naming conflicts — each call returns its own isolated state.

---

## When to Use Which

- **Options API** — Good for simple components or if you're coming from Vue 2.
- **Composition API** — Preferred for complex components, shared logic, and TypeScript projects. Recommended default in Vue 3.

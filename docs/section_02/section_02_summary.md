# Section 02 Study Guide - Intro to Vue

## 1) What Vue Is and Why It Matters

Vue.js is a JavaScript framework for building dynamic, reactive user interfaces.

Reactive UI means the page updates when state changes, without a full page refresh.

Common triggers for reactivity:

- User actions (typing, clicking, selecting filters)
- Server events (API responses)
- Time-based updates (text rotating every few seconds)

### Visual idea

- **Image/Screenshot**: "Reactive flow"
- **What to show**: A simple diagram: User Event / API / Timer -> State Update -> Vue Re-render -> Updated UI (no full reload)

### Example: automatic text change over time

```vue
<template>
  <h1>Build. {{ actionVerb }}.</h1>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const words = ['Create', 'Learn', 'Grow']
const index = ref(0)
const actionVerb = ref(words[index.value])

let timer
onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % words.length
    actionVerb.value = words[index.value]
  }, 3000)
})

onUnmounted(() => clearInterval(timer))
</script>
```

---

## 2) Project Introduced in This Section (Careers Site)

The course project is a careers/jobs site inspired by Google Careers.

Why this is a strong learning project:

- It is based on a real-world style product
- The domain is understandable (searching and filtering jobs)
- It still contains rich frontend complexity

Main reactive behaviors highlighted in the section:

- Hero message changes automatically
- Typing into search updates matching jobs count
- Logging in/out changes visible navigation sections
- Checking filters updates both result count and job list
- Pagination loads new jobs without reloading the entire page

### Visual ideas

- **Image/Screenshot Pair 1**: Before and after applying filters (for example: Bachelor's + Full-time)
- **What to show**: Result count and job cards changing together

- **Image/Screenshot Pair 2**: Logged-in vs logged-out states
- **What to show**: Avatar/subnav visible when logged in; Sign in button and hidden subnav when logged out

### Example: conditional UI based on auth state

```vue
<template>
  <nav>
    <button v-if="!isLoggedIn">Sign in</button>
    <img v-else :src="avatarUrl" alt="Profile" />
  </nav>

  <section v-if="isLoggedIn">
    <a>Saved Jobs</a>
    <a>Job Alerts</a>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const avatarUrl = ref('/avatar.png')
</script>
```

### Example: multi-filter reactive jobs list

```vue
<script setup>
import { ref, computed } from 'vue'

const jobs = ref([
  { title: 'Frontend Engineer', degree: 'bachelors', type: 'full-time' },
  { title: 'UI Developer', degree: 'masters', type: 'contract' }
])

const selectedDegree = ref(null)
const selectedType = ref(null)

const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const degreeOk = !selectedDegree.value || job.degree === selectedDegree.value
    const typeOk = !selectedType.value || job.type === selectedType.value
    return degreeOk && typeOk
  })
})

const matchedCount = computed(() => filteredJobs.value.length)
</script>
```

---

## 3) Vue 2 vs Vue 3 (Certification-Relevant)

Versioning concept covered:

- Major version changes (2 -> 3) can include breaking changes and major new capabilities
- Minor version changes (3.0 -> 3.1) are usually smaller, non-breaking improvements

Key Vue 3 points from the section:

- Built with TypeScript
- Improved performance and reduced bundle size
- Introduced the Composition API
- Kept the Options API (both APIs are supported)

### Visual idea

- **Image/Diagram**: "Vue API evolution"
- **What to show**:
  - Vue 2: Options API
  - Vue 3: Options API + Composition API

Short interview-style takeaway:
Vue 3 added the Composition API, but did not remove the Options API.

---

## 4) Vue vs React vs Angular (High-Level Positioning)

This section explains a spectrum from more opinionated to less opinionated:

- **Angular**: More opinionated, stricter conventions, broader built-in framework choices
- **React**: Less opinionated around ecosystem decisions outside rendering
- **Vue**: Balanced middle; focused core plus optional official ecosystem tools

Why Vue is presented as balanced:

- Core stays focused on rendering/reactivity
- Official ecosystem solutions exist for common app needs (routing, state)
- Adoption is incremental and optional

### Visual idea

- **Image/Diagram**: "Opinionated spectrum"
- **What to show**: React <- Vue -> Angular, with short labels under each

---

## 5) Quick Revision Cards

1. **What is reactivity in Vue?**  
   Automatic UI updates when underlying state changes.

2. **Why this careers project?**  
   It is realistic and demonstrates core Vue problems in practical scenarios.

3. **What changed most in Vue 3?**  
   Composition API was introduced; Options API remains available.

4. **How does Vue compare to React/Angular?**  
   Vue balances flexibility and guidance through an optional but cohesive ecosystem.

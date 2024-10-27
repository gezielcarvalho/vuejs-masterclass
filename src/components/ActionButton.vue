<script setup lang="ts">
  // declare a prop named `title` of type string, that will be received from the parent component
  import { defineProps } from "vue";

  interface IActionButtonProps {
    title: string;
  }

  const props: IActionButtonProps = defineProps({
    title: {
      type: String,
      required: true
    }
  });
</script>
<template>
  <button class="primary">
    {{ props.title }}
  </button>
</template>

<style scoped>
  button {
    @apply rounded px-5 py-2 font-medium;
  }

  .primary {
    @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
  }

  .secondary {
    background-color: #f3f4f6;
    color: #1e40af;
  }
</style>

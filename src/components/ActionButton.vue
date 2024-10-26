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
  <button
    class="rounded border-0 bg-brand-blue-1 px-5 py-2 font-medium text-white hover:shadow-blue">
    {{ props.title }}
  </button>
</template>

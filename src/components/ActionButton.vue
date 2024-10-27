<script setup lang="ts">
  // declare a prop named `title` of type string, that will be received from the parent component
  import { defineProps, ref } from "vue";

  interface IActionButtonProps {
    title: string;
    buttonClick?: Function;
  }

  // DATA
  const isPrimary = ref(true);

  // PROPS
  const props: IActionButtonProps = defineProps({
    title: {
      type: String,
      required: true
    },
    buttonClick: {
      type: Function,
      default: () => {}
    }
  });

  // METHODS
  const toggleButton = (e: any) => {
    e.stopPropagation();
    isPrimary.value = !isPrimary.value;
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (props.buttonClick) {
      props.buttonClick();
    }
  };
</script>
<template>
  <button
    :class="{
      primary: isPrimary,
      secondary: !isPrimary
    }"
    @click="handleClick">
    {{ props.title }}
  </button>
  <!-- create a checkbox -->
  <input v-model="isPrimary" type="checkbox" @click="toggleButton" />
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

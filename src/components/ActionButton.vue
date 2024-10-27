<script setup lang="ts">
  // declare a prop named `title` of type string, that will be received from the parent component
  import { defineProps, onMounted, ref } from "vue";

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
  const handleClick = () => {
    if (props.buttonClick) {
      props.buttonClick();
    }
  };

  // COMPUTED
  const buttonClasses = () => {
    return {
      primary: isPrimary.value,
      secondary: !isPrimary.value
    };
  };

  // LIFECYCLE HOOKS
  onMounted(() => {
    console.log("ActionButton is mounted");
  });
</script>
<template>
  <button :class="buttonClasses()" @click="handleClick">
    {{ props.title }}
  </button>
  <!-- create a checkbox -->
  <input v-model="isPrimary" type="checkbox" />
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

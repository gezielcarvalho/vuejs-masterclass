<script setup lang="ts">
  // declare a prop named `title` of type string, that will be received from the parent component
  import { defineProps, onMounted, computed, reactive } from "vue";

  interface IActionButtonProps {
    title: string;
    buttonClick?: Function;
  }

  // DATA
  const data = reactive({
    isPrimary: true
  });

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
  const methods = {
    handleClick: () => {
      if (props.buttonClick) {
        props.buttonClick();
      }
    }
  };

  // COMPUTED
  const comp = computed(() => {
    return {
      buttonClasses: () => {
        return {
          primary: data.isPrimary,
          secondary: !data.isPrimary
        };
      }
    };
  });

  // LIFECYCLE HOOKS
  onMounted(() => {
    console.log("ActionButton is mounted");
  });
</script>
<template>
  <button :class="comp.buttonClasses()" @click="methods.handleClick">
    {{ props.title }}
  </button>
  <!-- create a checkbox -->
  <input v-model="data.isPrimary" type="checkbox" />
</template>

<style scoped>
  button {
    @apply rounded px-5 py-2 font-medium;
  }

  .primary {
    @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
  }

  .secondary {
    @apply hover:bg-brand-blue-2 border-brand-blue-2 border-2 bg-transparent text-brand-blue-1 hover:text-white;
  }
</style>

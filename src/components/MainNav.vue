<script setup lang="ts">
  import { onMounted, onUnmounted, onUpdated, ref } from "vue";
  import { RouterLink } from "vue-router";

  const companyName = ref("Sabre Careers");
  const author = ref({ firstName: "Geziel", lastName: "Carvalho" });

  onMounted(() => {
    console.log("Component is mounted");
  });

  onUpdated(() => {
    console.log("Component is updated");
  });

  onUnmounted(() => {
    console.log("Component is unmounted");
  });
</script>
<template>
  <nav class="fixed left-0 top-0 h-16 w-full bg-white">
    <div
      class="border-brand-gray-1 mx-auto flex h-full flex-nowrap justify-between border-b border-solid px-8">
      <div class="flex h-full items-center space-x-2 pl-8 text-lg">
        <RouterLink to="/">{{ companyName }} - Demo</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <h2 class="ml-8 flex h-full items-center text-sm">
        Developed by {{ author.firstName }} {{ author.lastName }}
      </h2>
    </div>
  </nav>
</template>

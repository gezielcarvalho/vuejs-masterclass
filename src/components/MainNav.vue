<script setup lang="ts">
  import { onMounted, onUnmounted, onUpdated, ref } from "vue";
  import { RouterLink } from "vue-router";

  const companyName = ref("Sabre Careers");
  const author = ref({ firstName: "Geziel", lastName: "Carvalho" });
  const demoUrl = "https://google.com";

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Teams", path: "/teams" },
    { name: "Location", path: "/location" },
    { name: "Life at Sabre", path: "/life-at-sabre" },
    { name: "How we hire", path: "/how-we-hire" },
    { name: "Students", path: "/students" },
    { name: "Jobs", path: "/jobs" }
  ];

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
      class="mx-auto flex h-full flex-nowrap justify-between border-b border-solid border-brand-gray-1 px-8">
      <div class="flex h-full items-center space-x-2 pl-8 text-lg">
        <RouterLink class="font-bold" to="/">{{ companyName }} - Demo</RouterLink>
        <ul class="flex h-full list-none items-center space-x-4">
          <li v-for="item in menuItems" :key="item.name">
            <RouterLink :to="item.path">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <h2 class="ml-8 flex h-full items-center text-sm"></h2>
    </div>
  </nav>
  <p class="p-16">
    <span>{{ companyName }}</span> - Developed by {{ author.firstName }} {{ author.lastName }}
    <a :href="demoUrl">Google: {{ demoUrl }}</a>
  </p>
</template>

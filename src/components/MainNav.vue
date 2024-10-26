<!-- /src/components/MainNav.vue
This demonstrates the modular pattern by breaking the application into smaller
components (MainNav, views like TeamsView). 
-->
<script setup lang="ts">
  // Component-Based Architecture (Modular Pattern)
  import { onMounted, onUnmounted, onUpdated, ref } from "vue";
  import { RouterLink } from "vue-router";
  import ActionButton from "@/components/ActionButton.vue";
  import ProfileImage from "@/components/ProfileImage.vue";

  const companyName = ref("Sabre Careers");
  const author = ref({ firstName: "Geziel", lastName: "Carvalho" });
  const demoUrl = "https://google.com";
  const isLoggedIn = ref(false);

  const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
  };

  const menuItems = [
    { name: "Teams", path: "/teams" },
    { name: "Location", path: "/location" },
    { name: "Life at Sabre", path: "/life-at-sabre" },
    { name: "How we hire", path: "/how-we-hire" },
    { name: "Students", path: "/students" },
    { name: "Jobs", path: "/jobs" },
    { name: "About", path: "/about" }
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
      class="mx-auto flex h-full flex-nowrap items-center justify-between border-b border-solid border-brand-gray-1 px-8 py-2">
      <div class="flex h-full items-center space-x-2 pl-8 text-lg">
        <RouterLink class="font-bold" to="/">{{ companyName }} - Demo</RouterLink>
        <ul class="flex h-full list-none items-center space-x-4">
          <li v-for="item in menuItems" :key="item.name" class="ml-9 first:ml-2">
            <RouterLink :to="item.path">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <ProfileImage v-if="isLoggedIn" @click="toggleLogin" />
      <ActionButton v-else :title="'Sign In'" @click="toggleLogin" />
    </div>
  </nav>
  <p class="p-16">
    <span>{{ companyName }}</span> -
    <span>Developed by {{ author.firstName }} {{ author.lastName }}</span>
    <a class="ml-2" :href="demoUrl">Google: {{ demoUrl }}</a>
  </p>
</template>

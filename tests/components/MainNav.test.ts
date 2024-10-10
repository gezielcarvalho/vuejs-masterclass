import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainNav },
    { path: "/about", component: MainNav }
  ]
});

describe("MainNav", () => {
  it("renders a nav element", async () => {
    render(MainNav, {
      global: {
        plugins: [router]
      }
    });
    router.push("/");
    await router.isReady();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  // it("displays company name", async () => {
  //   render(MainNav, {
  //     global: {
  //       mocks: {
  //         companyName: "Sabre Mocked"
  //       },
  //       plugins: [router]
  //     }
  //   });
  //   router.push("/");
  //   await router.isReady();
  //   expect(screen.getByText("Sabre Mocked")).toBeInTheDocument();
  // });
  it("displays company name", async () => {
    render(MainNav, {
      global: {
        plugins: [router]
      }
    });
    router.push("/");
    await router.isReady();
    expect(screen.getByText("Sabre Careers")).toBeInTheDocument();
  });
});

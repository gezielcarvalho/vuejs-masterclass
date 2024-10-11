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
  beforeEach(async () => {
    render(MainNav, {
      global: {
        plugins: [router]
      }
    });
    router.push("/");
    await router.isReady();
  });

  it("renders a nav element", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("displays company name", () => {
    expect(screen.getByText("Sabre Careers")).toBeInTheDocument();
  });

  it("renders menu items", () => {
    const menuItems = [
      "About",
      "Teams",
      "Location",
      "Life at Sabre",
      "How we hire",
      "Students",
      "Jobs"
    ];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("has a Google link", () => {
    expect(screen.getByRole("link", { name: /google/i })).toHaveAttribute(
      "href",
      "https://google.com"
    );
  });

  it("displays author information", () => {
    expect(screen.getByText("Developed by Geziel Carvalho")).toBeInTheDocument();
  });
});

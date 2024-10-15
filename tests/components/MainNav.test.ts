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

  describe("when the user is not signed in", () => {
    it("displays the profile image after clicking login button", async () => {
      let profileImage = screen.queryByRole("img", { name: /User Profile Image/i });
      expect(profileImage).not.toBeInTheDocument();
      await screen.getByRole("button", { name: /Sign In/i }).click();
      profileImage = screen.queryByRole("img", { name: /User Profile Image/i });
      expect(profileImage).toBeInTheDocument();
      const button = screen.queryByRole("button", { name: /Sign In/i });
      expect(button).not.toBeInTheDocument();
    });
  });

  describe("when the user is signed in", () => {
    it("displays the login button after clicking on image to logout", async () => {
      await screen.getByRole("button", { name: /Sign In/i }).click();
      let profileImage = screen.queryByRole("img", { name: /User Profile Image/i });
      expect(profileImage).toBeInTheDocument();
      await screen.getByRole("img", { name: /User Profile Image/i }).click();
      profileImage = screen.queryByRole("img", { name: /User Profile Image/i });
      expect(profileImage).not.toBeInTheDocument();
      const button = screen.queryByRole("button", { name: /Sign In/i });
      expect(button).toBeInTheDocument();
    });
  });
});

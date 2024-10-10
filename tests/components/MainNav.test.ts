import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("renders a nav element", () => {
    render(MainNav);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("displays company name", () => {
    render(MainNav, {
      global: {
        mocks: {
          companyName: "Sabre Mocked"
        }
      }
    });
    expect(screen.getByText("Sabre Mocked")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton.vue", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        title: "Sign In"
      }
    });
    const button = screen.getByRole("button", {
      name: /sign in/i
    });
    expect(button).toBeInTheDocument();
  });

  it("renders button with class", () => {
    render(ActionButton, {
      props: {
        title: "Sign In"
      }
    });
    const button = screen.getByRole("button", {
      name: /sign in/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });
});

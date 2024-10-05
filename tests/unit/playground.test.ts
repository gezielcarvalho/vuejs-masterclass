import { describe, it, expect } from "vitest";
import { evenOrOdd } from "@/playground";

describe("Basic math", () => {
  it("should add numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("should subtract numbers", () => {
    expect(1 - 1).toBe(0);
  });
  it("should multiply numbers", () => {
    expect(2 * 2).toBe(4);
  });
  it("should divide numbers", () => {
    expect(4 / 2).toBe(2);
  });
  it("should modulo numbers", () => {
    expect(5 % 2).toBe(1);
  });
  it("should exponentiate numbers", () => {
    expect(2 ** 3).toBe(8);
  });
  it("should be even", () => {
    expect(evenOrOdd(2)).toBe("even");
  });
});

it("should add numbers", () => {
  expect(1 + 2).toBe(3);
});

import { evenOrOdd, multiply, divide } from "@/playground";

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
  describe("Number parity", () => {
    it("should be even", () => {
      expect(evenOrOdd(2)).toBe("even");
    });
    it("should be odd", () => {
      expect(evenOrOdd(3)).toBe("odd");
    });
  });

  describe("Multiplication", () => {
    it("should multiply numbers", () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(2, 0)).toBe(0);
      expect(multiply(0, 2)).toBe(0);
    });
  });

  describe("Division", () => {
    it("should divide numbers", () => {
      expect(divide(4, 2)).toBe(2);
    });
    it("should throw an error when dividing by zero", () => {
      expect(() => {
        divide(4, 0);
      }).toThrowError("Division by zero");
    });
  });
});

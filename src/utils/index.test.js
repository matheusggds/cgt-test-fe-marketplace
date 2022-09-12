import { formatToCurrency } from "./";

describe("utils", () => {
  it("formatToCurrency", () => {
    expect(formatToCurrency(100)).toEqual("$100.00");
  });
});

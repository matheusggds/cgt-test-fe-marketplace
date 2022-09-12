import { render, screen, waitFor } from "@testing-library/react";
import { renderWithContext } from "../../utils";
import ProductCard from "./";

const MOCK_CARD = {
  id: 1,
  price: 5,
  title: "test title",
  description: "test description",
  thumbnail: "test/path/file.jpg",
};

describe("<ProductCart />", () => {
  describe("View", () => {
    it("should display default layout", async () => {
      const productCard = renderWithContext(<ProductCard data={MOCK_CARD} />);

      expect(productCard).toMatchSnapshot();
    });
  });
});

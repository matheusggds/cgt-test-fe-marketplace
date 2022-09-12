import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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

    it("should display success message and hide it", async () => {
      renderWithContext(<ProductCard data={MOCK_CARD} />);

      const buyButton = screen.getByRole("button");

      fireEvent.click(
        buyButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      await waitFor(() => {
        expect(screen.getByText("Added to cart")).toBeInTheDocument();
      });

      await waitForElementToBeRemoved(screen.queryByText("Added to cart"), {
        timeout: 4000,
      });
    });
  });
});

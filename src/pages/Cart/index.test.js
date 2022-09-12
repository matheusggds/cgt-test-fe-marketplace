import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { renderWithContext } from "../../utils";

jest.mock("axios");

import Cart from "./";

const MOCK = {
  items: [
    {
      id: 1,
      title: "title A",
      description: "description A",
      price: 5,
      quantity: 5,
    },
    {
      id: 2,
      title: "title B",
      description: "description B",
      price: 10,
      quantity: 2,
    },
  ],
};

describe("<Home />", () => {
  describe("View", () => {
    it("should display context products", async () => {
      const cart = renderWithContext(<Cart />, MOCK);

      expect(cart).toMatchSnapshot();
    });

    it("should update total sum", async () => {
      renderWithContext(<Cart />, MOCK);

      const products = screen.getAllByRole("row");

      const firstProduct = within(products[1]);

      const changeQuantityButton = firstProduct.getAllByRole("button")[0];

      fireEvent.mouseDown(changeQuantityButton);

      fireEvent.click(
        screen.getByText(10),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(firstProduct.getByText("$50.00")).toBeInTheDocument();
    });

    it("should delete item", async () => {
      renderWithContext(<Cart />, MOCK);

      const products = screen.getAllByRole("row");

      const firstProduct = within(products[1]);

      const deleteButton = firstProduct.getAllByRole("button")[1];

      fireEvent.click(
        deleteButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      await waitFor(() => {
        expect(products.length).toEqual(6);
      });
    });

    it("should deisplay empty message", async () => {
      renderWithContext(<Cart />);

      expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    });
  });
});

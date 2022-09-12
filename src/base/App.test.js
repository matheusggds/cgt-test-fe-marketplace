import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { renderWithContext } from "../utils";

import axios from "axios";

jest.mock("axios");

import App from "./App";

const MOCK = {
  products: [
    {
      id: 1,
      title: "title A",
      description: "description A",
      price: 5,
    },
    {
      id: 2,
      title: "title B",
      description: "description B",
      price: 10,
    },
    {
      id: 3,
      title: "title C",
      description: "description C",
      price: 20,
    },
  ],
};

describe("<App />", () => {
  describe("Actions", () => {
    it("should update minicart counter", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      renderWithContext(<App />);

      const addButton = await screen.findAllByRole("button", {
        name: "add to cart",
      });

      const miniCartWrapper = within(screen.getByTestId("minicart-badge"));

      expect(() => {
        expect(miniCartWrapper.getByText("0")).toBeInTheDocument();
      });

      fireEvent(
        addButton[0],
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      fireEvent(
        addButton[0],
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      await waitFor(() => {
        expect(miniCartWrapper.getByText(2)).toBeInTheDocument();
      });
    });
  });
});

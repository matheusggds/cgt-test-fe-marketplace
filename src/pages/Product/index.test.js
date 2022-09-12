import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { renderWithContext } from "../../utils";

import axios from "axios";

jest.mock("axios");

import Product from "./";
import { wait } from "@testing-library/user-event/dist/utils";

const MOCK = {
  id: 1,
  title: "title A",
  description: "description A",
  images: ["src/path/1.jpg"],
  price: 5,
};

describe("<Product />", () => {
  describe("View", () => {
    it("should display default data", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      const products = renderWithContext(<Product />);

      await screen.findByText("title A");

      expect(products).toMatchSnapshot();
    });

    it("should display loading screen", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      renderWithContext(<Product />);

      await waitFor(() => {
        expect(screen.getByTestId("product-page-loading")).toBeInTheDocument();
      });
    });

    it("should display error screen", async () => {
      axios.get.mockReturnValue(Promise.reject());

      renderWithContext(<Product />);

      await waitFor(() => {
        expect(
          screen.getByText("Oops! We have a error, try again later")
        ).toBeInTheDocument();
      });
    });
  });

  describe("Requests", () => {
    it("should call API to get products", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      renderWithContext(<Product />);

      waitFor(() => {
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("Actions", () => {
    it("should add to cart", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      renderWithContext(<Product />);

      await screen.findByText("title A");

      const buttons = screen.getAllByRole("button");

      fireEvent.mouseDown(buttons[0]);

      fireEvent.click(
        screen.getByText(8),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      fireEvent.click(
        buttons[1],
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

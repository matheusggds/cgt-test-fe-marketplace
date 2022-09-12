import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { renderWithContext } from "../../utils";

import axios from "axios";

jest.mock("axios");

import Home from "./";

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

describe("<Home />", () => {
  describe("View", () => {
    it("should display products correctly", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      const products = renderWithContext(<Home />);

      await screen.findByText("title A");

      expect(products).toMatchSnapshot();
    });

    it("should display loading screen", async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

      renderWithContext(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId("home-loading")).toBeInTheDocument();
      });
    });

    it("should display error screen", async () => {
      axios.get.mockReturnValue(Promise.reject());

      renderWithContext(<Home />);

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

      renderWithContext(<Home />);

      waitFor(() => {
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
      });
    });
  });
});

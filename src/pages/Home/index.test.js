import { render, screen, waitFor } from "@testing-library/react";
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
  it("should display products", async () => {
    axios.get.mockReturnValue(Promise.resolve({ data: MOCK }));

    renderWithContext(<Home />);

    await screen.findByText("title A");

    screen.debug();
  });
});

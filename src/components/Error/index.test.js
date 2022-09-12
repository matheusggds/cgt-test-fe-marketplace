import { render, screen, waitFor } from "@testing-library/react";
import { renderWithContext } from "../../utils";

import axios from "axios";

jest.mock("axios");

import Error from "./";

describe("<Error />", () => {
  describe("View", () => {
    it("should display default message", async () => {
      render(<Error />);

      expect(
        screen.getByText("Oops! We have a error, try again later")
      ).toBeInTheDocument();
    });
  });
});

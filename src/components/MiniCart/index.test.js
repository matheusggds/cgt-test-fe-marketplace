import { render, screen, waitFor } from "@testing-library/react";
import { renderWithContext } from "../../utils";

import MiniCart from "./";

describe("<Error />", () => {
  describe("MiniCart", () => {
    it("should display default message", async () => {
      renderWithContext(<MiniCart />);

      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });
});

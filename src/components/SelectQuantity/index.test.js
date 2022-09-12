import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { renderWithContext } from "../../utils";
import SelectQuantity from "./";

const getValueChanged = jest.fn();

describe("<SelectQuantity />", () => {
  describe("View", () => {
    it("should display quantity passed as prop", () => {
      renderWithContext(<SelectQuantity quantity={5} />);

      expect(screen.getByText(5));
    });

    it("should call prop getValueChanged when change values", () => {
      renderWithContext(<SelectQuantity getValueChanged={getValueChanged} />);

      fireEvent.mouseDown(screen.getByRole("button"));

      fireEvent.click(
        screen.getByText("5"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(getValueChanged).toHaveBeenCalled();
    });

    it("should update context", () => {
      renderWithContext(<SelectQuantity />);

      fireEvent.mouseDown(screen.getByRole("button"));

      fireEvent.click(
        screen.getByText("5"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
  });
});

// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import GeoForm from ".";

describe("GeoForm", () => {
  test("Deve checar se o componente foi renderizado corretamente", async () => {
    const { getByText } = render(<GeoForm />);
    expect(getByText("Latitude")).toBeTruthy();
    expect(getByText("Longitude")).toBeTruthy();
    expect(getByText("BUSCAR")).toBeTruthy();
  });

  test("Deve checar se o componente dá feedback com informações inválidas", async () => {
    const { getByTestId, getByText } = render(<GeoForm />);

    fireEvent.input(getByTestId("latitude"), { target: { value: "abc" } });
    fireEvent.input(getByTestId("longitude"), { target: { value: "abc" } });
    fireEvent.click(getByText("BUSCAR"));

    expect(
      getByText("Latitude ou longitude não são números válidos.")
    ).toBeTruthy();
  });
});

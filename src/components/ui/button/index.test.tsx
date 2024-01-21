// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { Button } from "./styles";
import { fireEvent, render } from "@testing-library/react";

describe("Button.Primary", () => {
  test("Deve validar se a função mockada foi clickada", async () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(
      <Button.Primary onClick={mockOnClick}>teste</Button.Primary>
    );
    fireEvent.click(getByText("teste"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});

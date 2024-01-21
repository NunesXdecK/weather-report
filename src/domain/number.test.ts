// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { NumberValid } from "./number";

describe("Number", () => {
  test("Deve passar corretamente ao passar número válido", async () => {
    expect(() => new NumberValid("1")).not.toThrow();
  });
  test("Deve disparar erro ao passar número inválido", async () => {
    expect(() => new NumberValid("abc")).toThrow();
  });
});

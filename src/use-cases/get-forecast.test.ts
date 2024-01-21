// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { WeatherAPI } from "../types/weather-types";
import { GetForecasts } from "./get-forecast";
import { Filter } from "../models/filter";

describe("GetForecasts", () => {
  test("Chamar a função com os filtros corretamente", async () => {
    let forecastCalledWith: Filter | undefined;
    const filter = new Filter({
      latitude: "10.00",
      longitude: "0.10",
    });

    const weatherApiMock: WeatherAPI = {
      forecast: (params) => {
        forecastCalledWith = params;
        return Promise.resolve([]);
      },
    };

    const getForecasts = new GetForecasts(weatherApiMock);

    await getForecasts.execute(filter);

    expect(forecastCalledWith).toBeTruthy();
  });
});

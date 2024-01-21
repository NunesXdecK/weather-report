import { useEffect, useRef } from "react";
import { Button } from "../ui/button/styles";
import { Paper } from "../ui/card/styles";
import { Forms } from "../ui/forms/styles";
import { useWeatherStore } from "../../stores/weather-store";
import { useShallow } from "zustand/react/shallow";
import ProgressBar from "../ui/progress-bar";

const GeoForm: React.FC = () => {
  const [loading, error, getForecast] = useWeatherStore(
    useShallow((state) => [
      state.loading.state.loading,
      state.error.state.error,
      state.weather.action.forecast,
    ])
  );

  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitdeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!latitudeRef?.current || !longitdeRef?.current) return;
    latitudeRef.current.value = "2.811773";
    longitdeRef.current.value = "-60.716728";
  }, []);

  return (
    <section>
      <Paper.Holder>
        <Forms.Form
          disabled={loading}
          onSubmit={(event) => {
            event?.preventDefault();
            getForecast({
              latitude: latitudeRef?.current?.value || "",
              longitude: longitdeRef?.current?.value || "",
            });
          }}
        >
          <Forms.InputField>
            <Forms.Label htmlFor="latitude">Latitude</Forms.Label>
            <Forms.Input
              type="text"
              id="latitude"
              ref={latitudeRef}
              disabled={loading}
            />
          </Forms.InputField>
          <Forms.InputField>
            <Forms.Label htmlFor="longitude">Longitude</Forms.Label>
            <Forms.Input
              type="text"
              id="longitude"
              ref={longitdeRef}
              disabled={loading}
            />
          </Forms.InputField>
          <Button.Primary disabled={loading} type="submit">
            BUSCAR
          </Button.Primary>
        </Forms.Form>
        <ProgressBar />
        {error?.length > 0 && (
          <Paper.Footer>
            <Forms.Error>
              {error === "ValidationError"
                ? "Latitude ou longitude não são números válidos."
                : "Houve algum erro."}
            </Forms.Error>
          </Paper.Footer>
        )}
      </Paper.Holder>
    </section>
  );
};

export default GeoForm;

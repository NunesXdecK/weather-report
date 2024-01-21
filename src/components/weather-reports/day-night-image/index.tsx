type Props = {
  hour: number;
};

const DayNightImage: React.FC<Props> = ({ hour }: Props) => {
  return (
    <img
      src={
        hour > 18 || hour < 6 ? "/clear-night-icon.svg" : "/clear-day-icon.svg"
      }
      alt={hour > 18 || hour < 6 ? "Noite" : "Dia"}
    />
  );
};

export default DayNightImage;

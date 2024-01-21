import { useEffect, useState } from "react";
import { DateUtils } from "../../../utils/date-utils";
import { Container, Today, Timer } from "./styles";

const Watch: React.FC = () => {
  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => setUpdate((curr) => !curr), 60000);
    return () => clearInterval(intervalId);
  }, [update]);

  return (
    <Container>
      <Timer>{DateUtils.formatTime(new Date())}</Timer>
      <Today>{DateUtils.formatDate(new Date())} </Today>
    </Container>
  );
};

export default Watch;

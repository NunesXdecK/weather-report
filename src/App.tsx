import styled from "styled-components";
import "./App.css";
import { HTMLProps } from "react";
import { Paper } from "./components/ui/card/styles";
import { BrowserRouter } from "react-router-dom";
import NavigatorBar from "./components/ui/navigator-bar";
import PublicRouter from "./routes/public-router";

const Container = styled.div<HTMLProps<HTMLDivElement>>`
  display: flex;
  justify-content: center;
`;

const Content = styled.div<HTMLProps<HTMLDivElement>>`
  width: calc(100% - 48px);
  padding: 24px;
  max-width: calc(1280px + 48px);
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Paper.Holder>
        <Container>
          <Content>
            <NavigatorBar />
          </Content>
        </Container>
      </Paper.Holder>
      <Container>
        <Content>
          <PublicRouter />
        </Content>
      </Container>
    </BrowserRouter>
  );
};

export default App;

import styled from "styled-components";
import { globals } from "../globals";
import { HTMLProps } from "react";

const Holder = styled.div<HTMLProps<HTMLDivElement>>`
  transition-duration: 300ms;
  box-shadow: ${globals.shadows.default};
  background-color: ${globals.colors.white};

  &:hover {
    box-shadow: ${globals.shadows.hover};
  }
`;

const Header = styled.div<HTMLProps<HTMLDivElement>>`
  font-size: 12px;
  margin: 0 24px 0 24px;
  padding: 24px 0 24px 0;
  border-radius: 0 0 2px 2px;
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  &.spacing {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.p<HTMLProps<HTMLDivElement>>`
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: 600;
`;

const Content = styled.div<HTMLProps<HTMLDivElement>>`
  padding: 24px;
`;

const Footer = styled.div<HTMLProps<HTMLDivElement>>`
  padding: 24px 0 24px 0;
  margin: 0 24px 0 24px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
`;

export const Paper = {
  Holder,
  Header,
  Title,
  Content,
  Footer,
};

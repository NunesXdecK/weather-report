import styled from "styled-components";
import { globals } from "../globals";
import { HTMLProps } from "react";

const Primary = styled.button<HTMLProps<HTMLButtonElement>>`
  outline: 0;
  height: 36px;
  font-size: 14px;
  padding: 0 16px;
  line-height: 36px;
  border-radius: 2px;
  letter-spacing: 0.5px;
  transition-duration: 300ms;
  color: ${globals.colors.white};
  border: none;
  text-align: center;
  text-decoration: none;
  background-color: ${globals.colors.background};
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: ${globals.shadows.default};

  &:hover {
    box-shadow: ${globals.shadows.hover};
  }
`;

const Hollow = styled(Primary)`
  padding: 8px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: transparent;
`;

export const Button = {
  Primary,
  Hollow
};

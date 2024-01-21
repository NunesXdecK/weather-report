import styled from "styled-components";
import { HTMLProps } from "react";
import { globals } from "../../ui/globals";

export const Container = styled.section<HTMLProps<HTMLDivElement>>`
  text-align: center;
`;

export const Timer = styled.section<HTMLProps<HTMLDivElement>>`
  font-size: 24px;
  font-weight: 600;
  color: ${globals.colors.black};
`;

export const Today = styled.section<HTMLProps<HTMLDivElement>>`
  font-size: 12px;
  font-weight: 400;
  color: ${globals.colors.gray};
`;

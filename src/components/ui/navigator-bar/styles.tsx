import styled from "styled-components";
import { HTMLProps } from "react";
import { globals } from "../globals";

export const Navigator = styled.ul<HTMLProps<HTMLUListElement>>`
  margin: 0;
  padding: 0;
  gap: 10px;
  display: flex;
  list-style: none;

  & > li > a,
  & > li > a:visited {
    text-decoration: none;
    transition-duration: 300ms;
    color: ${globals.colors.black};
  }

  & > li > a:hover {
    opacity: 0.8;
  }

  & > li > a.active {
    border-bottom: 1px solid ${globals.colors.gray};
  }
`;

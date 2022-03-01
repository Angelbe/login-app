import styled from "styled-components";
import { ICountryBar } from "./CountryGraph.interface";

export const CountryListContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5px;
`;

export const ProgressBar = styled.div<ICountryBar>`
  position: absolute;
  z-index: 1;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  top: 0;
  left: 0;
  border: 1px black solid;
  border-radius: 5px;
  width: ${({ width }) => `${width}%`};
  background-color: #b0dae8;
  transition: width 1s ease-in-out;
`;

export const CountryBar = styled.div`
  position: relative;
  height: 100%;
  padding: 3px;
  flex-grow: 1;
  z-index: 5;
  color: black;

  &:hover {
    color: white;

    ${ProgressBar} {
      background-color: #82bace;
    }
  }
`;

export const CountryName = styled.div`
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CountryBarText = styled.span`
  position: relative;
  z-index: 10;
`;

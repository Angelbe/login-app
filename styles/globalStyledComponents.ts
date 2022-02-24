import styled from "styled-components";

export const PageStyled = styled.div`
  /* autoprefixer grid: autoplace */
  display: grid;
  grid-template-columns: [page-start]15% [main-start] 70% [main-end] 15% [page-end];
  grid-template-rows: [header-start] 150px [header-end main-start] 1fr [main-end footer-start] 100px [footer-end];
  min-height: 100vh;
  background-color: #edeff2;
  overflow-y: auto;
  box-sizing: content-box;

  > .Header {
    grid-row: header-start / header-end;
    grid-column: page-start / page-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
  }
  > .MainLogin {
    height: 100%;
    grid-row: main-start / main-end;
    grid-column: page-start / page-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 20px;
  }
  > .MainHome {
    height: 100%;
    grid-row: main-start / main-end;
    grid-column: page-start / page-end;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > .Footer {
    grid-row: footer-start / footer-end;
    grid-column: page-start / page-end;
    width: 100%;
    height: 100px;
    align-self: baseline;
    border-top: 1px solid #000000;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 15px;
    div {
      margin-top: 10px;
    }
    background-color: #edeff2;
  }
`;

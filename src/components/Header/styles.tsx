import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  .titleBoxBackground {
    justify-content: center;
    align-items: center;
    gap: 15px;

    h1 {
      font-size: 35px;
    }
  }
  .boxPageFav {
    position: absolute;
    right: 100px;
    bottom: 50px;
    width: 200px;
    @media (max-width: 1023px) {
      position: relative;
      width: 200px;
      margin: 0px auto;
      bottom: inherit;
      right: inherit;
    }
    .boxLink {
      background-color: rgb(255, 255, 255);
      border: 2px solid rgb(0, 0, 0);
      margin: 0px;
      padding: 3px 10px;
      bottom: -2px;
      position: absolute;
      right: -6px;
      transform: skew(-15deg);

      @media (max-width: 1023px) {
        position: relative;
        right: inherit;
      }

      a {
        color: rgb(0, 0, 0);
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
`;

import styled from "styled-components";

export const mainFav = styled.div`
  .titleBoxBackground {
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media (max-width: 1023px) {
      flex-direction: column;
    }

    .titleSite {
      h1 {
        font-size: 35px;
      }
    }
  }

  .boxContainerCharacters {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    .boxCharacter {
      border: 2px solid #000;
      box-shadow: 0 6px 6px -6px #000;
      background-color: #fff;
      display: inline-block;
      height: 300px;
      overflow: hidden;
      position: relative;
      width: 300px;
      cursor: pointer;

      button {
        position: absolute;
        right: 10px;
        border-radius: 8px;
        padding: 10px 20px;
        top: 10px;
        font-weight: 800;
        text-transform: uppercase;
        cursor: pointer;
        z-index: 999;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }

      .nameCharacter {
        background-color: #fff;
        border: 2px solid #000;
        margin: 0;
        padding: 3px 10px;
        bottom: -2px;
        position: absolute;
        right: -6px;
        transform: skew(-15deg);

        h2 {
          color: #000;
          font-size: 18px;
        }
      }
    }
  }

  .buttonsFooter {
    display: flex;
    justify-content: space-between;
    padding: 35px 20px;

    &.favPage {
      position: absolute;
      top: 10px;
      right: 70px;
      width: 200px;
      @media (max-width: 1023px) {
        position: relative;
        margin: 0px 10px;
      }

      .buttonHome {
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(0, 0, 0);
        margin: 0px;
        padding: 3px 10px;
        bottom: -2px;
        position: absolute;
        right: -6px;
        transform: skew(-15deg);

        a {
          color: rgb(0, 0, 0);
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
`;

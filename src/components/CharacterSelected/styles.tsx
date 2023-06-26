import styled from "styled-components";

export const boxCharacterSe = styled.div`
  position: relative;
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
  .boxInfoMain {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    align-items: center;
    gap: 15px;
    @media (max-width: 1023px) {
      justify-content: center;
      gap: 15px;
      flex-direction: column;
      margin: 20px 0px 40px 0px;
    }

    .buttonFavorite {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 999;
    }

    .boxInfoDetailsLeft {
      h2 {
        &.ativo,
        &.morto {
          position: relative;
        }
        &.ativo::after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background-color: #49da49;
          position: absolute;
          top: 12px;
          right: 45%;
          border-radius: 40px;
        }
        &.morto::after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background-color: #f00;
          position: absolute;
          top: 12px;
          right: 45%;
          border-radius: 40px;
        }
      }
    }

    .boxInfoDetailsRight {
      position: relative;
      @media (min-width: 1024px) {
        width: 50%;
      }
      .boxCharacter {
        float: right;
        border: 2px solid #000;
        box-shadow: 0 6px 6px -6px #000;
        background-color: #fff;
        display: inline-block;
        height: 300px;
        overflow: hidden;
        position: relative;
        width: 300px;
        cursor: pointer;
      }
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
  .buttonsFooter {
    position: absolute;
    bottom: -60px;
    left: 0px;
    width: 200px;
    @media (max-width: 1023px) {
      position: relative;
      margin: 0px 10px;
      display: flex;
      justify-content: center;
      margin: 0px auto;
      bottom: auto;
      padding: 0px 0px 20px 0px;

      .buttonHome {
        position: relative !important;
        left: inherit !important;
        bottom: inherit !important;
      }
    }

    .buttonHome {
      background-color: rgb(255, 255, 255);
      border: 2px solid rgb(0, 0, 0);
      margin: 0px;
      padding: 3px 10px;
      bottom: -2px;
      position: absolute;
      left: 20px;
      transform: skew(-15deg);

      a {
        color: rgb(0, 0, 0);
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
`;

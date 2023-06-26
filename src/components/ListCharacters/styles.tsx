import styled from "styled-components";

export const boxListCharacters = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  .titleBox {
    justify-content: space-between;
    padding: 0px 95px;
  }
  form {
    input {
      background-color: transparent;
      border: 1px solid #eee;
      padding: 5px 15px;
      border-radius: 5px;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }
  }
  .boxContainerCharacters {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    .boxAllItem {
      position: relative;
      max-width: 290px;

      button {
        position: absolute;
        top: 18px;
        right: 10px;
        z-index: 9999;
      }
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

        img {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    @media (max-width: 1023px) {
      .boxAllItem {
        position: relative;
        max-width: 150px;

        .boxCharacter {
          width: 150px;
          height: 150px;

          img {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
  }
`;

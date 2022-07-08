import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 13px;

  * {
    box-sizing: border-box;
  }

  h3,
  li,
  details {
    color: #333333;
  }

  width: ${({ sizeX }) => sizeX || "90%"};
  max-width: ${({ maxSizeX }) => maxSizeX || "854px"};
  height: ${({ sizeY }) => sizeY || "80vh"};
  max-height: ${({ maxSizeY }) => maxSizeY || "900px"};

  background-color: #f7ecde;

  border-radius: 12px;

  .name-img {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #fbf8f1;
    width: 100%;
    margin: 0px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;

    figure {
      background-color: inherit;
      border-radius: 50%;
      overflow: hidden;
      min-width: calc(30px + 10vh);
      height: calc(30px + 10vh);
      img {
        width: calc(30px + 10vh);
        height: calc(30px + 10vh);
      }
    }
    div {
      background-color: inherit;
      overflow: hidden;
      h3 {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      padding: 0px;
      margin: 0px;
    }
  }

  div {
    margin: 18px;
    padding: 10px;
    width: calc(100% - 36px);
    background-color: #e9dac1;
  }

  .more-info {
    overflow: auto;
    background-color: #f7ecde;
    margin: 0px;
    width: 100%;
    padding: 0px;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
  }
  details {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333333;
    summary {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      position: relative;
      cursor: pointer;
      padding-left: 2.2rem;
      padding: 1rem;

      &::before {
        content: "";
        border-width: 0.4rem;
        border-style: solid;
        border-color: transparent transparent transparent #333333;
        position: absolute;
        top: 1.3rem;
        left: 0.4rem;
        transform: rotate(0);
        transform-origin: 0.2rem 50%;
        transition: 0.25s transform ease;
      }
    }

    &[open] > summary::before {
      transform: rotate(90deg);
    }

    & summary::-webkit-details-marker {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    h3 {
      text-align: center;
    }
    .name-img {
      display: flex;
      align-items: center;
      gap: 20px;
      background-color: #f7ecde;
      width: 100%;
      margin: 0px;
      flex-direction: column;

      figure {
        background-color: inherit;
        border-radius: 50%;
        overflow: hidden;
        min-width: calc(50px + 12vh);
        height: calc(50px + 12vh);
        img {
          width: calc(50px + 12vh);
          height: calc(50px + 12vh);
        }
      }
      div {
        background-color: #e9dac1;
        margin: 18px;
        margin-bottom: 0px;
        padding: 10px;
        width: calc(100% - 17px);
        background-color: #e9dac1;
      }
    }
  }
`;

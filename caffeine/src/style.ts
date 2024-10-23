import styled, { createGlobalStyle } from 'styled-components';
import coffeeBackground from './assets/coffeeBackground.svg'
import coffeeBean from './assets/coffeeBean.svg'
import cup from './assets/cup.svg'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font: 500 14px Playfair Display;
  }

  body {
    background-color: 'fff';
  }

  button {
    background-color:transparent;
    border: none;
  }
`;

const OrderSection = styled.div`
    background-image:url(${coffeeBackground});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    .wrapper_order {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 5% 93px;
        max-width: 1366px;

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 22px;
            max-width: 575px;

            h2 {
                font: 700 54px 'Playfair Display';
                color: #FFFFFF;
            }

            p {
                font: 400 20px 'Playfair Display';
                color: #FFFFFF;
            }

            .button_order {
                font: 700 16px 'Playfair Display';
                max-width: 134px;
                background: #f9c06a;
                padding: 14px 27px;
                border-radius: 24px;
                color: #1E1E1E;
            }
        }

        .wrapper_img {
        background-image:url(${cup});
        width: 300px;
        height: 467px;
        background-size: contain;
        background-position: center;
    }
    }
`

const Feedback = styled.div`

`


export {Global, BackgroundPreview, SectionInfo, Catalog, SectionDifferent, OrderSection, Feedback}
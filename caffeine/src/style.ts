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
    margin: auto;
    padding: 82px 153px;
    max-width: 1366px;

    h2 {
        font: 700 54px Playfair Display;
        color: #603809;
        margin-bottom: 16px;
        text-align: center;
    }

    p {
        font: 400 20px Playfair Display;
        text-align: center;
        color: #707070;
        margin-bottom: 45px;
    }

    .slider {
        border: 1px solid #F9C06A6B;
        background-color: #FFF9F1;

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 129px 100px 101px;

            p {
                font: 600 18px Playfair Display;
                color: #707070;
            }
            
            h3 {
                font-family: Playfair Display;
                font-size: 32px;
                font-weight: 700;
                color: #603809;
            }

            .profession {
                font-family: Playfair Display;
                font-size: 20px;
                font-weight: 400;
                color: #707070;
            }

            .left_arrow, .right_arrow {

            }
        }

        .avatar {
            width: 112px;
            height: 112px;
            border-radius: 16px;
        }
    }
`


export {Global, BackgroundPreview, SectionInfo, Catalog, SectionDifferent, OrderSection, Feedback}
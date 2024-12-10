// @flow
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import photo from "../../../assets/images/portrait1.png";

import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <WrapperDescription>
                        <p>Hello, i’m</p>
                        <h4>Vladimir Zvyagincev</h4>
                        <h1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences
                            for
                            end-users.
                        </h1>
                        <FlexWrapper>
                            <Button>
                                About me
                                <Icon iconId="user" width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                            </Button>
                            <ButtonWrapper>
                                <Button>
                                    Projects
                                    <Icon iconId="eye" width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                                </Button>
                            </ButtonWrapper>

                        </FlexWrapper>
                    </WrapperDescription>

                    <WrapperPhoto>
                        <img src={photo} alt={""}/>
                    </WrapperPhoto>
                </FlexWrapper>
            </Container>
            <PlugComponent></PlugComponent>


        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding-top: 117px;
    position: relative;
`

const WrapperDescription = styled.div`
    max-width: 435px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    p {
        font-weight: 600;
        font-size: 32px;
    }

    h4 {
        font-weight: 600;
        font-size: 46px;
        color: #f5f5f5;
        margin: 6px 0 12px;
    }

    h1 {
        font-weight: 500;
        font-size: 18px;
        color: ${theme.colors.font};
        margin-bottom: 30px;
    }
`
const WrapperPhoto = styled.div`
    img {
        display: block;
    }

    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        content: "";
        display: inline-block;
        width: 486px;
        height: 486px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;
        top: 80px;
        right: 0;
        z-index: -1;
    }   
`
const ButtonWrapper = styled.div`
    margin-left: 32px;
`
// const PlugComponent = styled.div`
//     height: 128px;
//     background-color: ${theme.colors.primaryBg};
//     z-index: 9999;
// }
// `
const PlugComponent = styled.div`
    position: absolute; /* Добавляем абсолютное позиционирование */
    bottom: -128px; /* Размещаем внизу */
    left: 0; /* Размещаем слева */
    width: 100%; /* Занимаем всю ширину */
    height: 128px;
    background-color: ${theme.colors.primaryBg};
    z-index: 2; /* Устанавливаем более высокий z-index */
`;
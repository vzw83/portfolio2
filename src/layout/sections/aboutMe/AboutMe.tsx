// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/Title";
import {theme} from "../../../styles/Theme";
import {Card} from "./aboutCard/Card";


const itemsCard = [
    {title: "UI & UX DESIGNING", iconId: "rulerPen"},
    {title: "WEB DEVELOPMENT", iconId: "slider"},
    {title: "MOBILE DEVELOPMENT", iconId: "slider"},
    {title: "WEB SCRAPING WITH PYTHON", iconId: "rulerPen"},
]
export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <Title>About me:</Title>
                <ImDescription>
                    Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile
                    developer.
                    I jhave honed my skills in Web Development and advance i have core understanding of advance UI
                    design principles.
                    Here are the major skiills i have.
                </ImDescription>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <QuantityYears>5+</QuantityYears>
                    <DescriptionSkills>Years of experience. Specialised in building apps, while ensuring a seamless
                        web experience for end users.
                    </DescriptionSkills>
                </FlexWrapper>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"20px"}>
                    {
                        itemsCard.map((card, index) => {
                            return (
                                <Card card={card} key={index}/>
                            )
                        })
                    }
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    margin-top: 128px;
    padding-top: 55px;
`
const ImDescription = styled.p`
    margin: 8px 0 25px;
`
const QuantityYears = styled.span`
    font-weight: 600;
    font-size: 96px;
    color: ${theme.colors.accent};
`
const DescriptionSkills = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: ${theme.colors.font};
    max-width: 920px;
    width: 100%;
    text-align: start;
    line-height: 36px;
`
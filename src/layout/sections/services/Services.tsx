// @flow
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import {Title} from "../../../components/Title";
import {theme} from "../../../styles/Theme";
import {ServicesCard} from "./servicesCard/card/ServicesCard";

const itemsServiceCard = [
    {
        title: "UI & UX DESIGNING",
        iconId: "rulerPen",
        text: "I design beautiful web iterfaces with Figma and Adove XD             ",
    },
    {
        title: "WEB DEVELOPMENT",
        iconId: "slider",
        text: "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
    },
    {
        title: "MOBILE DEVELOPMENT",
        iconId: "slider",
        text: "I am an expert mobile developer. I have experience using Flutter and React Native.",
    },
    {
        title: "VERSION CONTROL",
        iconId: "git",
        text: "I can use version control systems well, and Git & Mecurial are my go-to tool.",
    },
    {
        title: "NPM AND NODEJS",
        iconId: "slider",
        text: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
    },
    {
        title: "WEB SCRAPING",
        iconId: "slider",
        text: "I can collect content and data from the internet then manipulate and analyze as needed.",
    },
]

export const Service = () => {
    return (
        <StyledService>
            <Container>
                <Wrapper>
                    <Title>The services i offer:</Title>
                </Wrapper>

                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"22px"}>
                    {
                        itemsServiceCard.map((service, index) => {
                            return (
                                <ServicesCard key={index} service={service}/>
                            )
                        })
                    }
                </FlexWrapper>
            </Container>

        </StyledService>
    );
};

const StyledService = styled.section`
    padding-top: 80px;
`
const Wrapper = styled.div`
    padding-bottom: 32px;
`

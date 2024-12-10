// @flow
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/Title";
import {ProjectsCard} from "./projectsCard/ProjectsCard";
import geo from "../../../assets/images/Rectangle 16.png"
import livents from "../../../assets/images/Rectangle 17.png"
import moove from "../../../assets/images/Rectangle 18.png"

const projectItems = [
    {
        img: geo,
        title: "TWINDER",
        text: "A live Geolocation app for finding tweets and twitter users around you."
    },
    {
        img: livents,
        title: "LIVENTS",
        text: "A video streaming app with live Geolocation, for streaming events."
    },
    {
        img: moove,
        title: "MOOVE",
        text: "Mobile app for booking instant pickup & dropoff accross major cities."
    },
]
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <Wrapper>
                    <Title>Featured projects:</Title>
                </Wrapper>
                <FlexWrapper justify={"space-around"} wrap={'wrap'} gap={"20px"}>
                    {
                        projectItems.map((item, index) => {
                            return (
                                <ProjectsCard key={index} item={item}/>
                            )
                        }
                        )
                    }
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
padding-bottom: 128px;
`
const Wrapper = styled.div`
    padding: 80px 0 32px;
`

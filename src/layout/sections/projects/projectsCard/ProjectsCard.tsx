// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type Props = {
    item: { img: string, title: string, text: string }
};
export const ProjectsCard = (props: Props) => {
    const {img, title, text} = props.item
    return (
        <StyledProjectsCard>
            <WrapperImg>
                <Image src={img} alt={title}/>
            </WrapperImg>

            <ProjectTitle>{title}</ProjectTitle>
            <ProjectText>{text}</ProjectText>
            <WrapperButton >
                <Button>View Live</Button>
                <Button>Github Repo</Button>
            </WrapperButton>
        </StyledProjectsCard>
    );
};
const StyledProjectsCard = styled.div`
    border-radius: 8px;
    max-width: 343px;
    width: 100%;
    padding: 16px 18px 23px;
    //height: 417px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #31313f;
`
const ProjectTitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: ${theme.colors.accent};
`
const ProjectText = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin: 5px 0 24px;
`
const Image = styled.img`
    width: 100%;
    //height: 260px;
    object-fit: cover;
`
const WrapperImg = styled.div`
    margin-bottom: 16px;
`
const WrapperButton = styled.div`
    display: flex;
`



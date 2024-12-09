// @flow
import * as React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon";

type Props = {
    card: { title: string, iconId: string }
};

export const Card = (props: Props) => {
    return (
        <StyledCard>
            <IconWrapper>
                <Icon iconId={props.card.iconId}/>
            </IconWrapper>
            <TitleCard>{props.card.title}</TitleCard>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    background-color: #bdbdbd;
    max-width: 256px;
    width: 100%;
`
const IconWrapper = styled.div`
    padding: 97px 190px 14px 24px;
`
const TitleCard = styled.p`
    font-weight: 600;
    font-size: 24px;
    width: 200px;
    padding-left: 23px;
`
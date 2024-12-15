// @flow
import * as React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/Icon";
import {theme} from "../../../../../styles/Theme";

type Props = {
    service: { title: string, iconId: string, text: string }
}
export const ServicesCard = (props: Props) => {
    return (
        <StyledServicesCard>
            <WrapperIcon>
                <Icon height={"60"} width={"60"} viewBox={"0 0 62 62"} iconId={props.service.iconId}/>
            </WrapperIcon>

            <Title>{props.service.title}</Title>
            <Text>{props.service.text}</Text>
        </StyledServicesCard>
    );
};

const StyledServicesCard = styled.div`

    border: 3px solid #7562e0;
    border-radius: 16px;
    max-width: 341px;
    min-height: 338px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    
`
const WrapperIcon = styled.div`
    padding-bottom: 11px;
`
const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 185%;
    padding-bottom: 16px;
`
const Text = styled.p`
    text-align: center;
    max-width: 296px;
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
`

// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import {Title} from "../../../components/Title";
import {theme} from "../../../styles/Theme";


const socialNetwork = [
    "facebook", "insta", "ball", "mail"
]
export const Connect = () => {
    return (
        <StyledConnect>
            <Container>
                <FlexWrapper>
                    <WrapperConnect>
                        <Title>Connect with me:</Title>
                        <small>Satisfied with me? Please contact me</small>
                        {
                            socialNetwork.map((el, index)=>{
                                return(
                                    <a href={"#"}> <Icon key={index} iconId={el}/></a>
                                )
                            })
                        }
                    </WrapperConnect>
                    <WrapperContact>

                    </WrapperContact>
                </FlexWrapper>
            </Container>


        </StyledConnect>
    );
};
const StyledConnect = styled.section`
`
const WrapperConnect = styled.div`
small{
    display: inline-block;
    color: ${theme.colors.font};
    font-weight: 500;
    font-size: 18px;
    margin: 16px 0 24px;
}
`
const WrapperContact = styled.div``
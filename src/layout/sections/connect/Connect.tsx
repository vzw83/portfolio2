// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import {Title} from "../../../components/Title";
import {theme} from "../../../styles/Theme";


const socialNetwork = [
    {iconId: "ball"},
    {iconId: "facebook"},
    {iconId: "insta"},
    {iconId: "mail"},
]
export const Connect = () => {
    return (
        <StyledConnect id={"contact"}>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    <WrapperConnect>
                        <Title>Connect with me:</Title>
                        <small>Satisfied with me? Please contact me</small>
                        <ul>
                            {
                                socialNetwork.map((el, index) => {
                                    return (
                                        <a href={"#"}> <Icon height={"32"} width={'32'} viewBox={"0 0 32 32"}
                                                             key={index} iconId={el.iconId}/></a>
                                    )
                                })
                            }
                        </ul>

                    </WrapperConnect>
                    <WrapperContact>
                        <Form>
                            <FlexWrapper direction={"column"} gap={"16px"}>
                                <small>Contact me, let’s make magic together</small>
                                <Field placeholder={"Name:"}/>
                                <Field placeholder={"Email:"}/>
                                <Field as={"textarea"} placeholder={"Message:"}/>
                                <Button type={"submit"}>Send</Button>
                            </FlexWrapper>
                        </Form>
                    </WrapperContact>
                </FlexWrapper>
            </Container>


        </StyledConnect>
    );
};
const StyledConnect = styled.section`
`
const WrapperConnect = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 337px;
    width: 100%;
    margin-right: 195px;

    small {
        display: inline-block;
        color: ${theme.colors.font};
        font-weight: 500;
        font-size: 18px;
        margin: 16px 0 24px;
    }

    a {
        margin-right: 5px;
    }

    @media max-width: 1030 px {
    margin-right: 100px;
}
`
const WrapperContact = styled.div`
    small {
        font-weight: 500;
        font-size: 24px;
        color: ${theme.colors.font};
    }
`


const Form = styled.form`
    max-width: 472px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;


    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    border-radius: 8px;
    height: 62px;
    background-color: #f5f5f5;
    opacity: 0.11;
        //color: ${theme.colors.font};

    width: 100%;
    padding: 37px 16px;

    &::placeholder {
        color: black;
        font-weight: 500;
        font-size: 16px;
        opacity: 0.5;
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid #f5f5f5;
    }
`
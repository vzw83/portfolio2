// @flow
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {DesktopMenu} from "./menu/DesktopMenu";
import {MobileMenu} from "./menu/MobileMenu";



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Link href="">
                        <IconName>Vladimir</IconName>
                    </Link>
                    <NavMenu>
                        <DesktopMenu/>
                        <MobileMenu/>
                    </NavMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
        ;
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 19px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    opacity: 0.98;
   
`
const IconName = styled.a`
    font-weight: 600;
    font-size: 28px;
    color: ${theme.colors.accent};
`
const NavMenu = styled.nav`

`

const Link = styled.a`
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.font};

    &:hover {
        color: #7562e0;
    }
`
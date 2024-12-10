// @flow
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";


const menuItems = ["Home", "About me", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Link href="">
                        <IconName>Vladimir</IconName>
                    </Link>

                    <NavMenu>
                        <ListItem>
                            {
                                menuItems.map((item, index) => {
                                    return (
                                        <Item key={index}><Link href="">{item}</Link></Item>
                                    )
                                })
                            }
                        </ListItem>

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
const ListItem = styled.ul`
    display: flex;

`
const Item = styled.li`
    & {
        margin-left: 52px;
    }

`
const Link = styled.a`
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.font};

    &:hover {
        color: #7562e0;
    }
`
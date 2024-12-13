// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "./Menu";

type Props = {
};
export const DesktopMenu = (props: Props) => {
    return (
        <StyledDesktopMenu>
           <Menu/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.div`
    ul{
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }
    display: block ;
    
    @media ${theme.media.tablet} {
        display: none ;
    }
`
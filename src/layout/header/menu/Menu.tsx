// @flow
import * as React from "react";
import {Link} from "react-scroll";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



const menuItems = [
    {title: "Home", href: "home"},
    {title: "About me", href: "aboutMe"},
    {title: "Projects", href: "projects"},
    {title: "Contact", href: "contact"},
]
export const Menu = () => {
    return (
            <ul>
                {menuItems.map((item, index) => (
                    <Item key={index}>
                        <ScrollLink
                            to={item.href}
                            smooth={true} // Включаем плавный скролл
                            duration={500} // Длительность скролла
                            offset={-100} // Отступ для фиксированной шапки
                            activeClass="active"
                        >
                            {item.title}
                        </ScrollLink>
                    </Item>
                ))}
            </ul>
    );
};



const Item = styled.li`
    margin: 0;
`;

const ScrollLink = styled<any>(Link as unknown as React.ComponentType)`
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.font};
    text-decoration: none;

    &:hover, &:active {
        color: #7562e0;
    }
`;
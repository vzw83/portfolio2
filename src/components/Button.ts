import styled from "styled-components";
import {theme} from "../styles/Theme";


type Props = {
    backgroundColor?: string; // Цвет фона
    color?: string; // Цвет текста
    borderColor?: string; // Цвет границы
    padding?: string; // Отступы
    width?: string; // Ширина
    height?: string; // Высота
}
export const Button = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    white-space: nowrap;

    border: 2px solid ${props => props.borderColor || "#7562e0"};
    border-radius: 8px;
    padding: ${props => props.padding || "12px 34px"};
    max-width: ${props => props.width || "159px"};
    width: 100%;
    height: ${props => props.height || "48px"};
    background-color: ${props => props.backgroundColor || "transparent"};
    color: ${props => props.color || `${theme.colors.font}`};
    cursor: pointer;
`
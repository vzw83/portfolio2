import * as React from 'react';
import iconsSprite from '../assets/images/icons-sprite.svg'

type Props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
};
export const Icon = (props: Props) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox||"0 0 50 50"} fill="none">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
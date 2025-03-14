import React from 'react';
import { SlideButtonStyle } from './SlideButton.style';

export interface ISlideButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const SlideButton: React.FunctionComponent<ISlideButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style: React.CSSProperties = { ...SlideButtonStyle, ...style };

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};

import React from 'react';
import { ButtonStyle } from './Button.style';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { variant = 'primary', disabled = false, children, backgroundColor, color, style } = props;

    let _style: React.CSSProperties = style || {};

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button
            style={{
                ...ButtonStyle(disabled ? 'disabled' : variant),
                ..._style
            }}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

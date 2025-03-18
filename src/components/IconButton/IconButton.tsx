import React from 'react';
import { IconButtonHoverStyle, IconButtonStyle } from './IconButton.style';

/**
 * All button properties are extended by HTMLButtonElement.
 */
export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

/**
 *
 * @param children
 * @param style
 * @returns Button Element
 */
export const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
    const { children, style, ...rest } = props;

    let _style = { ...IconButtonStyle, ...style };

    return (
        <button style={_style} {...rest} onMouseEnter={(e) => Object.assign(e.currentTarget.style, IconButtonHoverStyle)} onMouseLeave={(e) => Object.assign(e.currentTarget.style, _style)}>
            {children}
        </button>
    );
};

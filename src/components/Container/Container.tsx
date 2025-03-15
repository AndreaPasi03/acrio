import React from 'react';
import { getMaxWidthValue, MaxWidth } from '../../types/Breakpoint';

export interface IContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    maxWidth?: MaxWidth | undefined;
    disableGutters?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props: IContainerProps) => {
    const { maxWidth = 'lg', disableGutters = false, style, className, children, ...rest } = props;

    const containerStyle: React.CSSProperties = {
        maxWidth: getMaxWidthValue(maxWidth),
        paddingLeft: disableGutters ? '0' : '16px',
        paddingRight: disableGutters ? '0' : '16px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        boxSizing: 'border-box',
        ...style
    };

    return (
        <div className={className} style={containerStyle} {...rest}>
            {children}
        </div>
    );
};

import React from 'react';
import { breakpoints, MaxWidth } from '../../types/Breakpoint';

export interface IContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    maxWidth?: MaxWidth | undefined;
    disableGutters?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}

export const getMaxWidthValue = (maxWidth: MaxWidth | string | undefined): string => {
    // Se maxWidth è false, restituisce 100% per riempire tutto lo spazio
    if (maxWidth === false) {
        return '100%';
    }

    // Se maxWidth è una delle chiavi predefinite, restituisce il valore corrispondente
    if (maxWidth && typeof maxWidth === 'string' && breakpoints[maxWidth as Exclude<MaxWidth, false>]) {
        return breakpoints[maxWidth as Exclude<MaxWidth, false>];
    }

    // Se maxWidth è una stringa personalizzata (es. '800px'), la restituisce direttamente
    return maxWidth || '100%';
};

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

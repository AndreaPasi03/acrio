import React from 'react';
import { BoxStyle } from './DialogBody.style';

export interface IDialogBodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DialogBody: React.FC<IDialogBodyProps> = (props: IDialogBodyProps) => {
    const { children, style } = props;

    let _style: React.CSSProperties = { ...BoxStyle, ...style };

    return (
        <div style={_style} {...props}>
            {children}
        </div>
    );
};

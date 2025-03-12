import React, { FC } from 'react';

export interface IBoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Box: FC<IBoxProps> = (props: IBoxProps) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <div style={_style} {...props}>
            {children}
        </div>
    );
};

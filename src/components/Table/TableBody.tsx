import React from 'react';

export interface ITableBodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

export const TableBody: React.FunctionComponent<ITableBodyProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <tbody style={_style} {...props}>
            {children}
        </tbody>
    );
};

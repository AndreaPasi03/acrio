import React from 'react';

export interface ITableHeadProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {}

export const TableHead: React.FunctionComponent<ITableHeadProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <th style={_style} {...props}>
            {children}
        </th>
    );
};

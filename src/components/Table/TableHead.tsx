import { Property } from 'csstype';
import React from 'react';

export interface ITableHeadProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    width?: Property.Width<string | number> | undefined;
}

export const TableHead: React.FunctionComponent<ITableHeadProps> = (props) => {
    const { children, width, style } = props;

    let _style: React.CSSProperties = style || {};

    if (width) _style.width = width;

    return (
        <th style={_style} {...props}>
            {children}
        </th>
    );
};

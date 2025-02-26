import { Property } from 'csstype';
import React from 'react';

export interface ITableDataProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    width?: Property.Width<string | number> | undefined;
}

export const TableData: React.FunctionComponent<ITableDataProps> = (props) => {
    const { children, width, style } = props;

    let _style: React.CSSProperties = style || {};

    if (width) _style.width = width;

    return (
        <td style={_style} {...props}>
            {children}
        </td>
    );
};

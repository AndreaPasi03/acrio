import React from 'react';

export interface ITableDataProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {}

export const TableData: React.FunctionComponent<ITableDataProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <td style={_style} {...props}>
            {children}
        </td>
    );
};

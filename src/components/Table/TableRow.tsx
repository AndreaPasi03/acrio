import React from 'react';

export interface ITableRowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

export const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <tr style={_style} {...props}>
            {children}
        </tr>
    );
};

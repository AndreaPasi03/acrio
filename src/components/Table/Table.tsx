import React from 'react';

export interface ITableProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {}

export const Table: React.FunctionComponent<ITableProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <table style={_style} {...props}>
            {children}
        </table>
    );
};

import React from 'react';

export interface ITableHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

export const TableHeader: React.FunctionComponent<ITableHeaderProps> = (props) => {
    const { children, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <thead style={_style} {...props}>
            {children}
        </thead>
    );
};

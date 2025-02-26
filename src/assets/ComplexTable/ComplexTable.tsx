import React from 'react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from '../../components';
import { IComplexColumnProps } from './IComplexTable';
import { TableHeadStyle } from './ComplexTable.style';

export interface IComplexTableProps<T> extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    items: Array<T>;
    columns: Array<IComplexColumnProps<T>>;
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, item: T) => void;
    onCellClick?: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, item: string) => void;
}

export const ComplexTable = <T,>(props: IComplexTableProps<T>) => {
    const { items, columns, onRowClick, onCellClick, style } = props;

    let _style: React.CSSProperties = style || {};

    return (
        <Table style={_style}>
            <TableHeader>
                <TableRow>
                    {columns.map((column: IComplexColumnProps<T>, idx: number) => (
                        <TableHead style={TableHeadStyle} width={column.width} key={idx}>
                            {!column.hideHeader ? column.title : ''}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((item: T, item_idx: number) => (
                    <TableRow
                        onClick={(event) => {
                            if (onRowClick) onRowClick(event, item);
                        }}
                        key={item_idx}
                    >
                        {columns.map((column: IComplexColumnProps<T>, column_idx: number) => (
                            <TableData
                                width={column.width}
                                onClick={(event) => {
                                    if (onCellClick) onCellClick(event, column.field !== undefined ? String(item[column.field]) : '');
                                }}
                                key={`${item_idx}_${column_idx}`}
                            >
                                {column.customElement ? column.customElement(item) : column.field && String(item[column.field])}
                            </TableData>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

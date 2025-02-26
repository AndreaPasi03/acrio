import { Property } from 'csstype';
import React from 'react';

export interface IComplexColumnProps<T> {
    title: string;
    field?: keyof T;
    // fieldType?: T[keyof T];
    width?: Property.Width<string | number> | undefined;
    hideHeader?: boolean;
    hideColumn?: boolean;
    customElement?: (item: T) => React.JSX.Element;
}

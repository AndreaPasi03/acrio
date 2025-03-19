import { Card } from '@mui/material';
import * as React from 'react';
import { IdObject } from '../../types';

export interface PartCardProps<T> {
    items: T[];
    RenderContentCard: (item: T) => React.JSX.Element;
}

const PartCard = <T extends IdObject>({ items, RenderContentCard, ...props }: PartCardProps<T>) => {
    return (
        <Card {...props}>
            {items.map((item, index) => (
                <RenderContentCard key={index} {...item} />
            ))}
        </Card>
    );
};

export default PartCard;

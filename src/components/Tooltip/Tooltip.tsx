import React from 'react';
import * as styles from './Tooltip.style';
import { Position } from '../../types';

export interface ITooltipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Text appear on hover of element
     */
    title: string;

    /**
     * Element inside
     */
    children: React.ReactNode;

    /**
     * Position of the tooltip
     */
    position?: Position;

    /**
     * Appear with an arrow
     */
    arrow?: boolean;
}

export const Tooltip: React.FC<ITooltipProps> = (props: ITooltipProps) => {
    const { title, children, position = 'bottom', arrow = false, style } = props;

    const _style: React.CSSProperties = { ...styles.tooltipContainer, ...style };
    const [visible, setVisible] = React.useState(false);

    return (
        <div style={_style} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            <span
                style={{
                    ...styles.tooltipTextBase,
                    ...styles.tooltipPositions[position],
                    opacity: visible ? 1 : 0,
                    visibility: visible ? 'visible' : 'hidden'
                }}
            >
                {title}
                {arrow && <span style={{ ...styles.tooltipArrowBase, ...styles.tooltipArrowPositions[position] }} />}
            </span>
        </div>
    );
};

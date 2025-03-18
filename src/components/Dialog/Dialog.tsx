import React from 'react';
import { BoxStyle, DialogStyle } from './Dialog.style';
import { getMaxWidthValue, MaxWidth } from '../../types';

export interface IDialogProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Show or Hide the Dialog
     */
    open: boolean;

    /**
     * On close of the Dialog
     * @param event → pass the event
     * @returns void
     */
    onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    /**
     * Dialog width
     */
    maxWidth?: MaxWidth | string | number | undefined;

    /**
     * Dialog Full Width
     */
    fullWidth?: boolean;

    /**
     * Dialog height
     */
    height?: string | number | undefined;
}

export const Dialog: React.FC<IDialogProps> = (props: IDialogProps) => {
    const { open, onClose, style, children, maxWidth, fullWidth, height, ...rest } = props;

    if (!open) return null;

    const _style: React.CSSProperties = {
        ...BoxStyle,
        ...style
    };

    if (maxWidth) DialogStyle.maxWidth = getMaxWidthValue(maxWidth);
    if (fullWidth) DialogStyle.maxWidth = '100%';
    if (height) DialogStyle.height = height;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) onClose(event);
    };

    return (
        <div style={_style} onClick={handleOverlayClick} {...rest}>
            <div style={DialogStyle}>{children}</div>
        </div>
    );
};

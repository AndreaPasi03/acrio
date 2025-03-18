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

    const _style = { ...DialogStyle, ...style };

    if (maxWidth) _style.maxWidth = getMaxWidthValue(maxWidth);
    if (fullWidth) _style.maxWidth = '100%';
    if (height) _style.height = height;

    /**
     * On Click outside of the dialog div
     * @param event
     */
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) onClose(event);
    };

    return (
        <div style={BoxStyle} onClick={handleOverlayClick} {...rest}>
            <div style={_style}>{children}</div>
        </div>
    );
};

import React from 'react';
import { BoxStyle, DialogStyle } from './Dialog.style';
import { DialogTitle } from './DialogTitle';
import { DialogBody } from './DialogBody';

export interface IDialogProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
    children: React.ReactNode;
    title?: string;
}

export const Dialog: React.FC<IDialogProps> = (props: IDialogProps) => {
    const { isOpen, onClose, style, children, title, ...rest } = props;

    if (!isOpen) return null;

    const _style: React.CSSProperties = {
        ...BoxStyle,
        ...style
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div style={_style} onClick={handleOverlayClick} {...rest}>
            <div style={DialogStyle}>
                <DialogTitle onClose={onClose}>{title}</DialogTitle>
                <DialogBody>{children}</DialogBody>
            </div>
        </div>
    );
};

import React from 'react';
import { CloseIcon } from '../../../assets';
import { BoxStyle, SpanStyle } from './DialogTitle.style';
import { IconButton } from '../../IconButton';

export interface IDialogTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    titleStyle?: React.CSSProperties;
    icon?: React.JSX.Element;
    onCloseAction?: () => void;
}

export const DialogTitle: React.FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
    const { children, titleStyle, onCloseAction, style, icon = <CloseIcon /> } = props;

    const _style: React.CSSProperties = { ...BoxStyle, ...style };

    const _tytleStyle: React.CSSProperties = { ...SpanStyle, ...titleStyle };

    return (
        <div style={_style}>
            <span style={_tytleStyle}>{children}</span>
            <IconButton onClick={onCloseAction} style={{ position: 'absolute', right: 5 }}>
                {icon}
            </IconButton>
        </div>
    );
};

import React, { CSSProperties, JSX } from 'react';
import { FC } from 'react';
import { CloseIcon } from '../../../assets';
import { BoxStyle, SpanStyle } from './DialogTitle.style';
import { IconButton } from '../../IconButton';

export interface IDialogTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    titleStyle?: CSSProperties;
    icon?: JSX.Element;
    onCloseAction?: () => void;
}

export const DialogTitle: FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
    const { children, titleStyle, onCloseAction, style, icon = <CloseIcon /> } = props;

    let _style: CSSProperties = { ...BoxStyle, ...style };

    const _tytleStyle: CSSProperties = { ...titleStyle, ...SpanStyle };

    return (
        <div style={_style}>
            <span style={_tytleStyle}>{children}</span>
            <IconButton onClick={onCloseAction} style={{ position: 'absolute', right: 5 }}>
                {icon}
            </IconButton>
        </div>
    );
};

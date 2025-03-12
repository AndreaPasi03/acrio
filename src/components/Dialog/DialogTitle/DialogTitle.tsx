import React, { CSSProperties, JSX } from 'react';
import { FC } from 'react';
import { CloseIcon } from '../../../assets';
import { BoxStyle } from './DialogTitle.style';
import { IconButton } from '../../IconButton';

export interface IDialogTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    titleStyle?: CSSProperties;
    icon?: JSX.Element;
    onClose?: () => void;
}

export const DialogTitle: FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
    const { children, titleStyle, onClose: closeAction, style, icon = <CloseIcon /> } = props;

    let _style: CSSProperties = { ...BoxStyle, ...style };

    return (
        <div style={_style} {...props}>
            <span style={titleStyle}>{children}</span>
            <IconButton onClick={closeAction}>{icon}</IconButton>
        </div>
    );
};

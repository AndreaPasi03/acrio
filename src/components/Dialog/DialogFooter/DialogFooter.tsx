import React, { FC } from 'react';

export interface IDialogFooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export const DialogFooter: FC<IDialogFooterProps> = (props: IDialogFooterProps) => {
    const { children, style } = props;

    const _style = style || {};

    return <footer style={_style}>{children}</footer>;
};

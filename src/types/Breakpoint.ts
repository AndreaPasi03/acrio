export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export const breakpoints: Record<Exclude<MaxWidth, false>, string> = {
    xs: '540px',
    sm: '720px',
    md: '960px',
    lg: '1140px',
    xl: '1320px'
};

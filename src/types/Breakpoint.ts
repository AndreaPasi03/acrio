export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export const Breakpoint: Record<Exclude<MaxWidth, false>, string> = {
    xs: '540px',
    sm: '720px',
    md: '960px',
    lg: '1140px',
    xl: '1320px'
};

export const getMaxWidthValue = (maxWidth: MaxWidth | string | number | undefined): string | number => {
    // Se maxWidth è false, restituisce 100% per riempire tutto lo spazio
    if (maxWidth === false) {
        return '100%';
    }

    if (maxWidth && typeof maxWidth === 'string' && Breakpoint[maxWidth as Exclude<MaxWidth, false>]) {
        // Se maxWidth è una delle chiavi predefinite, restituisce il valore corrispondente
        return Breakpoint[maxWidth as Exclude<MaxWidth, false>];
    }

    // Se maxWidth è una stringa personalizzata (es. '800px'), la restituisce direttamente
    return maxWidth || '100%';
};

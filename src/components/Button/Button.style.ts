import React from 'react';

export const ButtonStyle = (variant: 'primary' | 'secondary' | 'disabled'): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
        padding: '8px 16px',
        borderRadius: '16px',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        border: 'none',
        cursor: 'pointer'
    };

    const variants: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: '#2563eb', // Blue-600
            color: '#ffffff'
        },
        secondary: {
            backgroundColor: '#e5e7eb', // Gray-200
            color: '#1f2937' // Gray-800
        },
        disabled: {
            backgroundColor: '#9ca3af', // Gray-400
            color: '#374151', // Gray-700
            cursor: 'not-allowed'
        }
    };

    return { ...baseStyles, ...variants[variant] };
};

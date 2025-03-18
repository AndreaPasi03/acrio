import React from 'react';

export const tooltipContainer: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block'
};

export const tooltipTextBase: React.CSSProperties = {
    visibility: 'hidden',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: '4px',
    padding: '5px 10px',
    position: 'absolute',
    zIndex: 10,
    whiteSpace: 'nowrap',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out'
};

export const tooltipPositions = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%) translateX(-5px)' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%) translateX(5px)' },
    'top-left': { bottom: '100%', right: '100%', transform: 'translateX(-5px)', borderBottomRightRadius: 0 },
    'top-right': { bottom: '100%', left: '100%', transform: 'translateX(5px)', borderBottomLeftRadius: 0 },
    'bottom-left': { top: '100%', right: '100%', transform: 'translateX(-5px)', borderTopRightRadius: 0 },
    'bottom-right': { top: '100%', left: '100%', transform: 'translateX(5px)', borderTopLeftRadius: 0 }
};

export const tooltipArrowBase: React.CSSProperties = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderStyle: 'solid'
};

export const tooltipArrowPositions = {
    top: { bottom: '-5px', left: '50%', transform: 'translateX(-50%)', borderWidth: '5px 5px 0 5px', borderColor: 'black transparent transparent transparent' },
    bottom: { top: '-5px', left: '50%', transform: 'translateX(-50%)', borderWidth: '0 5px 5px 5px', borderColor: 'transparent transparent black transparent' },
    left: { right: '-5px', top: '50%', transform: 'translateY(-50%)', borderWidth: '5px 0 5px 5px', borderColor: 'transparent transparent transparent black' },
    right: { left: '-5px', top: '50%', transform: 'translateY(-50%)', borderWidth: '5px 5px 5px 0', borderColor: 'transparent black transparent transparent' },
    'top-left': { bottom: '-5px', right: '0px', transform: 'translateY(0)', borderWidth: '5px 0 0 5px', borderColor: 'black black transparent transparent' },
    'top-right': { bottom: '-5px', left: '0px', transform: 'translateY(0)', borderWidth: '5px 5px 0 0', borderColor: 'black transparent transparent black' },
    'bottom-left': { top: '-5px', right: '0px', transform: 'translateY(0)', borderWidth: '0 0 5px 5px', borderColor: 'transparent black black transparent' },
    'bottom-right': { top: '-5px', left: '0px', transform: 'translateY(0)', borderWidth: '0 5px 5px 0', borderColor: 'transparent transparent black black' }
};

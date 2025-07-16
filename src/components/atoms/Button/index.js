import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PrimaryButton = styled(Link)`
    border-color: #546e7a;
    color: #546e7a;
    display: inline-block;
    padding: 0.375rem 0.75rem;
    text-decoration: none;
    border: 1px solid #546e7a;
    border-radius: 0.25rem;
    
    &:hover {
        border-color: #546e7a;
        background-color: #546e7a;
        color: white;
        text-decoration: none;
    }
`;

export const AsideButton = styled(PrimaryButton)`
    border-radius: 50px;
`;

export function Button({ 
    children, 
    to, 
    variant = 'primary', 
    className = '', 
    ...props 
}) {
    const StyledButton = variant === 'aside' ? AsideButton : PrimaryButton;
    
    return (
        <StyledButton 
            to={to} 
            className={`btn ${className}`} 
            {...props}
        >
            {children}
        </StyledButton>
    );
}
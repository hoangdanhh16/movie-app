import React from 'react'
import './button.scss';

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}
const Button = ({ onClick, className, children }: ButtonProps) => {
    return (
        <button className={`btn ${className}`} onClick={() => onClick && onClick()} >{children}</button>
    )
}

export default Button
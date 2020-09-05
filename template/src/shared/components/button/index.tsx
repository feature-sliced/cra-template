import React, { PropsWithChildren } from 'react'
import cn from "classnames";
import "./index.scss";

type Props = PropsWithChildren<{
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    title?: string;
    outline?: boolean;
    disabled?: boolean;
    className?: string;
}>;

/**
 * @UIKit Кнопка
 */
const Button = (props: Props) => {
    const {
        onClick,
        title,
        children,
        className,
        outline,
        disabled,
        type = "button",
    } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            title={title}
            className={cn("button", { outline }, className)}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button

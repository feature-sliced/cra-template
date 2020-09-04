import React, { PropsWithChildren } from 'react'
import cn from "classnames";
import "./index.scss";

type Props = PropsWithChildren<{
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    title?: string;
    outline?: boolean;
    className?: string;
}>;

const Button = (props: Props) => {
    const {
        onClick,
        title,
        children,
        className,
        type = "button",
        outline = false,
    } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            title={title}
            className={cn("button", { outline }, className)}
        >
            {children}
        </button>
    )
}

export default Button

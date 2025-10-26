"use client";

import React from "react";
import {
    AustinUIColor,
    AustinUIColorClassMap,
    AustinUISize,
    AustinUISizeClassMap,
} from "../types";

interface ButtonProps
    extends Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "type" | "size"
    > {
    variant?: AustinUIColor;
    size?: AustinUISize;
    overrideWidthFull?: boolean;
    type?: "button" | "submit" | "reset";
    formAction?: (formData: FormData) => Promise<void>;
    children?: React.ReactNode;
}

export function Button({
    variant = "plain",
    size = "normal",
    overrideWidthFull = false,
    children,
    onClick,
    disabled = false,
    className = "",
    type = "button",
    formAction,
    ...rest
}: ButtonProps) {
    const baseClasses = `${
        !overrideWidthFull ? "w-full" : ""
    } font-medium transition-all duration-200 focus:outline-none hover:scale-[1.02]`;

    const buttonColors: AustinUIColorClassMap = {
        red: `
      bg-[var(--color-red)]
      hover:bg-[var(--color-red-hover)]
      active:bg-[var(--color-red-active)]
      disabled:bg-[var(--color-red-disabled)]
      text-[var(--color-red-overlay-text)]
      border-[var(--color-red-border)]
    `,

        green: `
      bg-[var(--color-green)]
      hover:bg-[var(--color-green-hover)]
      active:bg-[var(--color-green-active)]
      disabled:bg-[var(--color-green-disabled)]
      text-[var(--color-green-overlay-text)]
      border-[var(--color-green-border)]
    `,
        blue: `
      bg-[var(--color-blue)]
      hover:bg-[var(--color-blue-hover)]
      active:bg-[var(--color-blue-active)]
      disabled:bg-[var(--color-blue-disabled)]
      text-[var(--color-blue-overlay-text)]
      border-[var(--color-blue-border)]
    `,

        plain: `
      bg-[var(--color-plain)]
      hover:bg-[var(--color-plain-hover)]
      active:bg-[var(--color-plain-active)]
      disabled:bg-[var(--color-plain-disabled)]
      text-[var(--color-plain-overlay-text)]
      border-[var(--color-plain-border)]
    `,
    } as const;

    const buttonSizes: AustinUISizeClassMap = {
        small: "py-1 px-3 text-sm rounded-md",
        normal: "py-2 px-4 text-md rounded-lg",
        large: "py-3 px-6 text-lg rounded-lg",
    } as const;

    return (
        <button
            {...rest}
            type={type}
            onClick={onClick}
            disabled={disabled}
            formAction={formAction}
            className={`${baseClasses} ${buttonColors[variant]} ${buttonSizes[size]} ${className}`}
        >
            {children}
        </button>
    );
}

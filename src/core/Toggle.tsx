"use client";

import React from "react";
import {
    AustinUIColor,
    AustinUIColorClassMap,
    AustinUISize,
    AustinUISizeClassMap,
} from "../types";

interface ToggleProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "size" | "value"
    > {
    size?: AustinUISize;
    variant?: AustinUIColor;
    value: boolean;
    setValue: (v: boolean) => void;
    className?: string;
    label?: string;
}

export function Toggle({
    size = "normal",
    variant = "plain",
    value,
    setValue,
    className = "",
    label,
    ...rest
}: ToggleProps) {
    const toggleColors: AustinUIColorClassMap = {
        red: "accent-[var(--color-red)]",
        green: "accent-[var(--color-green)]",
        blue: "accent-[var(--color-blue)]",
        plain: "accent-[var(--color-plain)]",
    };

    const toggleSizes: AustinUISizeClassMap = {
        small: "w-4 h-4",
        normal: "w-5 h-5",
        large: "w-6 h-6",
    };

    const baseLabelClass = "font-semibold";

    const toggleLabelSizes: AustinUISizeClassMap = {
        small: "text-sm",
        normal: "text-md",
        large: "text-lg",
    };

    return (
        <label className="inline-flex items-center space-x-2 cursor-pointer select-none">
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
                className={`${toggleColors[variant]} ${toggleSizes[size]} ${className}`}
                {...rest}
            />
            {label && (
                <span className={`${baseLabelClass} ${toggleLabelSizes[size]}`}>
                    {label}
                </span>
            )}
        </label>
    );
}

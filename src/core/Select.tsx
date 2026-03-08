"use client";

import React, { useId } from "react";
import { AustinUISize, AustinUISizeClassMap, LabelValuePair } from "../types";
import { Label } from "./Label";
import { CircleAlert } from "lucide-react";

interface SelectProps extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange" | "size" | "placeholder"
> {
    size?: AustinUISize;
    label?: string;
    options: LabelValuePair[];
    choice: string;
    setChoice: (value: string) => void;
    placeholder?: string;
    ignoreDefaultValue?: boolean;
    className?: string;
    style?: React.CSSProperties;
    error?: boolean;
    errorMessage?: string;
}

export function Select({
    size = "normal",
    label,
    options,
    choice,
    setChoice,
    placeholder = "Select an option",
    ignoreDefaultValue = false,
    className = "",
    style,
    error,
    errorMessage,
    ...rest
}: SelectProps) {
    const selectSizes: AustinUISizeClassMap = {
        small: "py-1 px-3 text-sm rounded-md",
        normal: "py-2 px-4 text-md rounded-lg",
        large: "py-3 px-6 text-lg rounded-lg",
    } as const;

    const colorClass = error
        ? `
        bg-[var(--color-plain)]
        hover:bg-[var(--color-plain-hover)]
        disabled:bg-[var(--color-plain-disabled)]
        border border-[var(--color-red-border)]
    `
        : `bg-[var(--color-plain)]
        hover:bg-[var(--color-plain-hover)]
        disabled:bg-[var(--color-plain-disabled)]
        border border-[var(--color-plain-border)]`;

    const errorTextSizes: AustinUISizeClassMap = {
        small: "text-sm",
        normal: "text-[15px]",
        large: "text-lg",
    };

    const selectId = useId();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChoice(e.target.value);
    };

    return (
        <div className="w-full flex flex-col gap-1">
            {label && <Label id={selectId} size={size} text={label} />}
            <select
                {...rest}
                id={selectId}
                value={choice}
                onChange={handleChange}
                className={`
                    aui-select-field
                    ${selectSizes[size]}
                    ${colorClass}
                    appearance-none
                    ${className}
                `}
                style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    backgroundImage:
                        "url(\"data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='white' d='M6 8L0 0h12z'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "0.65rem",
                    ...style,
                }}
            >
                {!ignoreDefaultValue && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}

                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            {error && (
                <div className="w-full flex flex-row items-center gap-1">
                    <CircleAlert
                        width={20}
                        height={20}
                        color="var(--color-red)"
                    />

                    <p
                        className={`${errorTextSizes[size]} text-[var(--color-red)]`}
                    >
                        {errorMessage}
                    </p>
                </div>
            )}
        </div>
    );
}

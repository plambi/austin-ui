"use client";

import React, { useId } from "react";
import { AustinUISize, AustinUISizeClassMap, LabelValuePair } from "../types";
import { Label } from "./Label";

interface SelectProps
    extends Omit<
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
    ...rest
}: SelectProps) {
    const selectSizes: AustinUISizeClassMap = {
        small: "py-1 px-3 text-sm rounded-md",
        normal: "py-2 px-4 text-md rounded-lg",
        large: "py-3 px-6 text-lg rounded-lg",
    } as const;

    const selectId = useId();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChoice(e.target.value);
    };

    return (
        <div className="flex flex-col gap-1">
            {label && <Label id={selectId} size={size} text={label} />}
            <select
                {...rest}
                id={selectId}
                value={choice}
                onChange={handleChange}
                className={`
    ${selectSizes[size]}
    bg-[var(--color-plain)]
    hover:bg-[var(--color-plain-hover)]
    active:bg-[var(--color-plain-active)]
    disabled:bg-[var(--color-plain-disabled)]
    text-[var(--color-plain-overlay-text)]
    border-[var(--color-plain-border)]
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
        </div>
    );
}

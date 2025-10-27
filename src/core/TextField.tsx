"use client";

import { AustinUISize, AustinUISizeClassMap } from "../types";
import React from "react";
import { Label } from "./Label";

interface TextFieldProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "value" | "onChange" | "size"
    > {
    size?: AustinUISize;
    overrideWidthFull?: boolean;
    label?: string;
    value: string | number;
    setValue: (val: string) => void;
    className?: string;
    style?: React.CSSProperties;
    endNode?: React.ReactNode;
}

export function TextField({
    label,
    overrideWidthFull = false,
    value,
    setValue,
    size = "normal",
    className = "",
    style,
    endNode,
    ...rest
}: TextFieldProps) {
    const baseClass = `
        ${!overrideWidthFull ? "w-full" : ""}
        text-[var(--color-text-primary)]
        focus:outline-none
        transition-all duration-200
        placeholder-[var(--color-text-muted)]

        bg-[var(--color-plain)]
        hover:bg-[var(--color-plain-hover)]
        disabled:bg-[var(--color-plain-disabled)]
        border-[var(--color-plain-border)]
        appearance-none
    `;

    const textSizes: AustinUISizeClassMap = {
        small: "py-1 px-3 text-sm rounded-md",
        normal: "py-2 px-4 text-md rounded-lg",
        large: "py-3 px-6 text-lg rounded-lg",
    } as const;

    const inputId = React.useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <Label id={inputId} size={size} text={label} />}
            <div className="flex flex-row items-center gap-3">
                <input
                    id={inputId}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className={`${baseClass} ${textSizes[size]} ${className}`}
                    style={{
                        ...style,
                    }}
                    {...rest}
                />
                {endNode}
            </div>
        </div>
    );
}

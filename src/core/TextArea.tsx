"use client";

import { AustinUISize, AustinUISizeClassMap } from "../types";
import React from "react";
import { Label } from "./Label";

interface TextAreaProps
    extends Omit<
        React.InputHTMLAttributes<HTMLTextAreaElement>,
        "value" | "onChange" | "size"
    > {
    size?: AustinUISize;
    overrideWidthFull?: boolean;
    label?: string;
    value: string | number;
    setValue: (val: string) => void;
    className?: string;
    style?: React.CSSProperties;
}

export function TextArea({
    label,
    overrideWidthFull = false,
    value,
    setValue,
    size = "normal",
    className = "",
    style,
    ...rest
}: TextAreaProps) {
    const baseClass = `
        ${!overrideWidthFull ? "w-full" : ""}
        text-[var(--color-text-primary)]
        focus:outline-none
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

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <Label id={inputId} size={size} text={label} />}

            <textarea
                id={inputId}
                type="text"
                value={value}
                onChange={handleChange}
                className={`
                    ${baseClass}
                    ${textSizes[size]}
                    ${className}
        `}
                style={{
                    ...style,
                }}
                {...rest}
            />
        </div>
    );
}

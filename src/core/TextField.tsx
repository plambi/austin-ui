"use client";

import { AustinUISize, AustinUISizeClassMap } from "../types";
import React from "react";
import { Label } from "./Label";
import { CircleAlert } from "lucide-react";

interface TextFieldProps extends Omit<
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
    error?: boolean;
    errorMessage?: string;
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
    error,
    errorMessage,
    ...rest
}: TextFieldProps) {
    const baseClass = `
        ${!overrideWidthFull ? "w-full" : ""}
        text-[var(--color-text-primary)]
        focus:outline-none
        transition-all duration-200
        placeholder-[var(--color-text-muted)]
        appearance-none
    `;

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

    const textSizes: AustinUISizeClassMap = {
        small: "py-1 px-3 text-sm rounded-md",
        normal: "py-2 px-4 text-md rounded-lg",
        large: "py-3 px-6 text-lg rounded-lg",
    } as const;

    const errorTextSizes: AustinUISizeClassMap = {
        small: "text-sm",
        normal: "text-[15px]",
        large: "text-lg",
    };

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
                    className={`aui-text-field-input ${baseClass} ${colorClass} ${textSizes[size]} ${className}`}
                    style={{
                        ...style,
                    }}
                    {...rest}
                />
                {endNode}
            </div>
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

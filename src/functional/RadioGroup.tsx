import React, { useId } from "react";
import {
    AustinUIColor,
    AustinUIColorClassMap,
    AustinUISize,
    AustinUISizeClassMap,
    LabelValuePair,
} from "../types";
import { Label } from "../core/Label";

interface RadioGroupProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type" | "onChange" | "value" | "size"
    > {
    size?: AustinUISize;
    variant?: AustinUIColor;
    label?: string;
    options: Array<string | LabelValuePair>;
    choice: string | number;
    setChoice: (value: string) => void;

    compact?: boolean;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
}

export function RadioGroup({
    size = "normal",
    variant = "plain",
    label,
    options,
    choice,
    setChoice,
    compact = false,
    className = "",
    labelClassName = "",
    inputClassName = "",
    ...rest
}: RadioGroupProps) {
    const radioColors: AustinUIColorClassMap = {
        red: "accent-[var(--color-red)]",
        green: "accent-[var(--color-green)]",
        blue: "accent-[var(--color-blue)]",
        plain: "accent-[var(--color-plain)]",
    };

    const radioSizes: AustinUISizeClassMap = {
        small: "w-4 h-4",
        normal: "w-5 h-5",
        large: "w-6 h-6",
    };

    const baseLabelClass =
        "font-semibold text-[var(--color-text-primary)] leading-none";

    const labelSizes: AustinUISizeClassMap = {
        small: "text-sm",
        normal: "text-md",
        large: "text-lg",
    };

    const groupId = useId();

    return (
        <div className="flex flex-col gap-1">
            {label && <Label id={groupId} size={size} text={label} />}
            <div
                id={groupId}
                className={`
                ${
                    compact
                        ? "flex flex-wrap gap-x-3 gap-y-2"
                        : "grid gap-3 grid-cols-2 md:grid-cols-4"
                }
                ${className}
            `}
            >
                {options.map((opt) => {
                    const value = typeof opt === "string" ? opt : opt.value;
                    const label = typeof opt === "string" ? opt : opt.label;
                    const checked = String(choice) === String(value);

                    return (
                        <label
                            key={value}
                            className={`flex items-center space-x-2 cursor-pointer select-none ${labelClassName}`}
                        >
                            <input
                                {...rest}
                                type="radio"
                                value={value}
                                checked={checked}
                                onChange={() => setChoice(String(value))}
                                className={`${radioColors[variant]} ${radioSizes[size]} ${inputClassName}`}
                            />
                            <span
                                className={`${baseLabelClass} ${labelSizes[size]}`}
                            >
                                {label}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

import { AustinUISize, AustinUISizeClassMap } from "../types";

interface LabelProps {
    size?: AustinUISize;
    id: string;
    text: string;
}

export function Label({ size = "normal", id, text }: LabelProps) {
    const baseLabelClass = "font-semibold";

    const labelSizes: AustinUISizeClassMap = {
        small: "text-sm",
        normal: "text-md",
        large: "text-lg",
    };

    return (
        <label
            htmlFor={id}
            className={`aui-label ${baseLabelClass} ${labelSizes[size]} text-[var(--color-text-secondary)]`}
        >
            {text}
        </label>
    );
}

import { Minus, Plus } from "lucide-react";
import { AustinUISize, AustinUISizeClassMap } from "../types";
import { NumberField } from "../core/NumberField";

interface QuantitySpecificationProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type" | "onChange" | "value" | "size" | "min" | "max"
    > {
    value: number;
    setValue: (n: number) => void;
    min?: number;
    max?: number;

    size?: AustinUISize;

    className?: string;
    inputClassName?: string;
}

export default function QuantitySpecification({
    value,
    setValue,
    min,
    max,

    size = "normal",

    className = "",
    inputClassName = "",
    ...rest
}: QuantitySpecificationProps) {
    const iconSizes: AustinUISizeClassMap = {
        small: "w-4 h-4",
        normal: "w-5 h-5",
        large: "w-6 h-6",
    };

    const iconContainerBaseClass = "rounded-xl transition-all duration-200";

    const iconContainerClass: AustinUISizeClassMap = {
        small: `p-1 ${iconContainerBaseClass}`,
        normal: `p-2 ${iconContainerBaseClass}`,
        large: `p-3 ${iconContainerBaseClass}`,
    };

    const numberFieldSizes: AustinUISizeClassMap = {
        small: "w-12",
        normal: "w-16",
        large: "w-20",
    };

    function onClickPlus() {
        const newVal = value + 1;
        if (max && newVal > max) {
            return;
        }
        setValue(newVal);
    }

    function onClickMinus() {
        const newVal = value - 1;
        if (min && newVal < min) {
            return;
        }
        setValue(newVal);
    }

    return (
        <div
            className={`${className} bg-[var(--color-plain)]
            disabled:bg-[var(--color-plain-disabled)]
            text-[var(--color-plain-overlay-text)]
            border border-[var(--color-plain-border)] 
            flex w-fit flex-row items-center
            gap-1 px-2 rounded-md`}
        >
            <div
                onClick={onClickMinus}
                className={`${iconContainerClass[size]} 
                bg-[var(--color-plain)]
                hover:bg-[var(--color-plain-hover)]
                active:bg-[var(--color-plain-active)]
                disabled:bg-[var(--color-plain-disabled)]`}
            >
                <Minus className={`${iconSizes[size]}`} />
            </div>

            <NumberField
                overrideWidthFull
                size={size}
                className={`${inputClassName} ${numberFieldSizes[size]} text-center px-1`}
                value={value.toString()}
                setValue={(s: string) => {
                    const val = parseFloat(s);

                    if (Number.isNaN(val)) {
                        setValue(0);
                    } else if (min && val < min) {
                        setValue(min);
                    } else if (max && val > max) {
                        setValue(max);
                    } else {
                        setValue(val);
                    }
                }}
                {...rest}
            />
            <div
                onClick={onClickPlus}
                className={`${iconContainerClass[size]} 
                bg-[var(--color-plain)]
                hover:bg-[var(--color-plain-hover)]
                active:bg-[var(--color-plain-active)]
                disabled:bg-[var(--color-plain-disabled)]`}
            >
                <Plus className={`${iconSizes[size]}`} />
            </div>
        </div>
    );
}

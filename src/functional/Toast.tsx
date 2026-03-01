"use client";

import { useEffect } from "react";
import { AustinUIColor, AustinUIColorClassMap } from "../types";

interface ToastProps {
    color?: AustinUIColor;
    header: string;
    body?: string;
    duration?: number; // duration in ms
    closeElement?: React.ReactNode;
    onClose: () => void;
}

export function Toast({
    color = "plain",
    header,
    body,
    duration = 5000,
    closeElement,
    onClose,
}: ToastProps) {
    const colorClasses: AustinUIColorClassMap = {
        red: `
      bg-[var(--color-red)]
      border-[var(--color-red-border)]
    `,

        green: `
      bg-[var(--color-green)]
      border-[var(--color-green-border)]
    `,
        blue: `
      bg-[var(--color-blue)]
      border-[var(--color-blue-border)]
    `,

        plain: `
      bg-[var(--color-plain)]
      border-[var(--color-plain-border)]
    `,
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`fixed bottom-5 right-5 z-50 
                flex items-center gap-3 rounded-[8px] p-4 
                max-w-[300px] shadow-lg transition-all duration-500 border
                ${colorClasses[color]}`}
            role="alert"
        >
            <div className="flex flex-col gap-3 text-wrap break-all">
                <p className="text-lg font-bold">{header}</p>
                <p className="text-md">{body}</p>
            </div>

            <button
                onClick={onClose}
                className={`ml-auto rounded-full p-1 hover:bg-white/20`}
                aria-label="Close"
            >
                {closeElement}
            </button>
        </div>
    );
}

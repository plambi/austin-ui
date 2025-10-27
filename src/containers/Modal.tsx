"use client";

import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    overlayClassName?: string;
    bottomNode?: ReactNode;
    title?: string;
}

export function Modal({
    children,
    isOpen,
    onClose,
    className = "",
    overlayClassName = "",
    bottomNode,
    title,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${overlayClassName}`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.5 }}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`
                relative bg-[var(--color-card-primary)] border border-[var(--color-border)]
                rounded-lg shadow-lg max-w-lg w-full
                mx-4 p-1
                ${className}
            `}
            >
                <div className="flex flex-col gap-3 ">
                    {title && (
                        <div>
                            <p className="text-lg font-bold px-2 py-2">
                                {title}
                            </p>
                            <hr
                                className="w-full border-1 border-t border-solid"
                                style={{ borderColor: "var(--color-border)" }}
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-3 px-2 py-2">
                        {children}
                        {bottomNode}
                    </div>
                </div>
            </div>
        </div>
    );
}

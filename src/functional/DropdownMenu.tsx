import { useState, useRef, useEffect } from "react";

interface DropdownMenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    position?: "left" | "right" | "center";
    className?: string;
    menuClassName?: string;
}

export function DropdownMenu({
    trigger,
    children,
    position = "center",
    className = "",
    menuClassName = "",
}: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close with escape key
    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("keydown", handleEscapeKey);
        return () => document.removeEventListener("keydown", handleEscapeKey);
    }, []);

    const positionClasses = {
        left: "left-0",
        right: "right-0",
        center: "left-1/2 transform -translate-x-1/2",
    };

    return (
        <div ref={dropdownRef} className={`relative inline-block ${className}`}>
            {/* Trigger */}
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className={`
            absolute mt-2 min-w-[200px] z-50
            rounded-lg shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95
            ${positionClasses[position]}
            ${menuClassName}
          `}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

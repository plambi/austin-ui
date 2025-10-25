import { ReactNode } from "react";

interface BaseCardProps {
    children: ReactNode;
    onClick?: () => void;
}

export function BaseCard({ children, onClick }: BaseCardProps) {
    return (
        <div
            className="w-full rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
            onClick={onClick}
            style={{
                backgroundColor: "var(--color-card-primary)",
                borderWidth: "0.125rem",
                borderColor: "var(--color-border)",
                transition: "all 0.3s ease",
            }}
        >
            {children}
        </div>
    );
}

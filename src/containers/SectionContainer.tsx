import { ReactNode } from "react";

type SectionContainerProps = {
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
    headerAlign?: "center" | "left";
    hideContent?: boolean;
    showUnderline?: boolean;
};

export function SectionContainer({
    children,
    title,
    description,
    className,
    headerAlign = "center",
    hideContent,
    showUnderline = false,
}: SectionContainerProps) {
    return (
        <div className={className}>
            <div
                className={`flex flex-col ${
                    headerAlign === "center" ? "items-center" : "items-start"
                }`}
            >
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                {title && showUnderline && (
                    <hr
                        className="w-full border-1 border-t border-solid mb-4"
                        style={{ borderColor: "var(--color-border)" }}
                    />
                )}

                {description && <h3 className="text-lg mb-2">{description}</h3>}
            </div>

            {!hideContent && children}
        </div>
    );
}

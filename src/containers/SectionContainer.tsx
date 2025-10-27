import { ReactNode } from "react";

type SectionContainerProps = {
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
    headerAlign?: "center" | "left";
    hideContent?: boolean;
    showUnderline?: boolean;
    headerNode?: React.ReactNode;
};

export function SectionContainer({
    children,
    title,
    description,
    className,
    headerAlign = "center",
    hideContent,
    showUnderline = false,
    headerNode,
}: SectionContainerProps) {
    return (
        <div className={className}>
            <div
                className={`flex flex-col ${
                    headerAlign === "center" ? "items-center" : "items-start"
                }`}
            >
                <div className="flex flex-row gap-3 mb-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    {headerNode}
                </div>

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

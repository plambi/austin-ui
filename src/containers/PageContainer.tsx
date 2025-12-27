import { ReactNode } from "react";

type PageContainerProps = {
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
    leftTitleNode?: ReactNode;
    rightTitleNode?: ReactNode;
};

export function PageContainer({
    children,
    title,
    description,
    className,
    leftTitleNode,
    rightTitleNode,
}: PageContainerProps) {
    return (
        <div
            className={`max-w-5xl mx-auto flex flex-col space-y-6 p-6 ${className}`}
        >
            {(title || description || leftTitleNode || rightTitleNode) && (
                <div className="mb-6">
                    <div className="flex items-center justify-between w-full relative">
                        <div className="flex-shrink-0">{leftTitleNode}</div>

                        {title && (
                            <h1 className="mt-4 absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                                {title}
                            </h1>
                        )}

                        <div className="flex-shrink-0">{rightTitleNode}</div>
                    </div>

                    {/* Only render h2 if description exists */}
                    {description && (
                        <h2 className="text-lg text-center font-semibold">
                            {description}
                        </h2>
                    )}
                </div>
            )}

            {children}
        </div>
    );
}

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
            className={`max-w-5xl mx-auto flex flex-col space-y-6 xs:mx-0 p-6 sm:p-4 ${className}`}
        >
            <div className="mb-6">
                <div className="flex items-center justify-between w-full relative">
                    {/* Left node */}
                    <div className="flex-shrink-0">{leftTitleNode}</div>

                    {/* Centered title */}
                    <h1 className="mt-4 absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                        {title}
                    </h1>

                    {/* Right Area */}
                    <div className="flex-shrink-0">{rightTitleNode}</div>
                </div>

                <h2 className="text-lg text-center font-semibold">
                    {description}
                </h2>
            </div>
            {children}
        </div>
    );
}

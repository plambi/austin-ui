import { ReactNode } from "react";

type PageContainerProps = {
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
};

export function PageContainer({
    children,
    title,
    description,
    className,
}: PageContainerProps) {
    return (
        <div
            className={`max-w-5xl mx-auto flex flex-col space-y-6 xs:mx-0 p-6 sm:p-4 ${className}`}
        >
            <div className="mb-6">
                <h1 className="text-2xl text-center font-bold">{title}</h1>
                <h2 className="text-lg text-center font-semibold">
                    {description}
                </h2>
            </div>
            {children}
        </div>
    );
}

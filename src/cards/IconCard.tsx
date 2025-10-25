import { ReactNode } from "react";
import { BaseCard } from "./BaseCard";

type HomeScreenCardProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
};

export function HomeScreenCard({
    title,
    description,
    icon,
}: HomeScreenCardProps) {
    return (
        <BaseCard>
            <div className="w-full flex items-center justify-center text-center space-x-3 py-3">
                <div className="">{icon}</div>
                <div className="flex flex-col">
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </BaseCard>
    );
}

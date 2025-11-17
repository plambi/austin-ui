"use client";

import { Trash2 } from "lucide-react";

type TableProps = {
    data: Record<string, any[]>;
    functionColumn?: {
        header: string;
        onClick: (s: number) => void;
    };
};

export function Table({ data, functionColumn }: TableProps) {
    const headers = Object.keys(data);

    const dataLists = Object.values(data);
    const longestListLength = dataLists.reduce((a, b) =>
        b.length > a.length ? b : a
    ).length;

    return (
        <table className="min-w-full bg-[var(--color-card-primary)] rounded-lg overflow-hidden">
            <thead className="bg-[var(--color-card-primary)]">
                <tr>
                    {headers.map((header) => (
                        <th
                            key={`table-header-${header}`}
                            className="px-2 md:px-4 py-2 text-left text-sm font-semibold"
                        >
                            {header}
                        </th>
                    ))}
                    {functionColumn && (
                        <th className="px-2 md:px-4 py-2 text-left text-sm font-semibold">
                            {functionColumn.header}
                        </th>
                    )}
                </tr>
            </thead>
            <tbody className="bg-[var(--color-card-secondary)]">
                {Array.from({ length: longestListLength }).map((_, index) => (
                    <tr key={`table-row-${index}`}>
                        {headers.map((header) => (
                            <td
                                key={`table-header-${header}-entry-${index}`}
                                className={`px-2 md:px-4 py-2 text-sm ${
                                    index < longestListLength - 1
                                        ? "border-[var(--color-border)] border-b"
                                        : ""
                                }`}
                            >
                                {data[header][index] ?? ""}
                            </td>
                        ))}
                        {functionColumn && (
                            <td
                                className={`px-2 md:px-4 py-2 text-sm ${
                                    index < longestListLength - 1
                                        ? "border-[var(--color-border)] border-b"
                                        : ""
                                }`}
                            >
                                <button
                                    className="cursor-pointer text-red-600 hover:text-red-800"
                                    onClick={() =>
                                        functionColumn.onClick(index)
                                    }
                                >
                                    <Trash2 className="w-4 h-4 inline" />
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

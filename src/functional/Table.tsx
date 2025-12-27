import { Trash2 } from "lucide-react";
// Import your Link component (Next.js, React Router, or 'a')
// import Link from 'next/link';

type TableProps = {
    data: Record<string, any[]>;
    rowHrefs?: string[]; // New prop for row links
    functionColumn?: {
        header: string;
        onClick: (s: number) => void;
    };
};

export function Table({ data, rowHrefs, functionColumn }: TableProps) {
    const headers = Object.keys(data);
    const dataLists = Object.values(data);
    const longestListLength = dataLists.reduce((a, b) =>
        b.length > a.length ? b : a
    ).length;

    return (
        <table className="min-w-full bg-[var(--color-card-primary)] rounded-lg overflow-hidden border-collapse">
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
                {Array.from({ length: longestListLength }).map((_, index) => {
                    const href = rowHrefs?.[index];

                    return (
                        <tr
                            key={`table-row-${index}`}
                            className={
                                href
                                    ? "hover:bg-black/5 transition-colors cursor-pointer"
                                    : ""
                            }
                        >
                            {headers.map((header) => (
                                <td
                                    key={`table-header-${header}-entry-${index}`}
                                    className={`p-0 text-sm ${
                                        index < longestListLength - 1
                                            ? "border-[var(--color-border)] border-b"
                                            : ""
                                    }`}
                                >
                                    {/* If href exists, wrap content in a link that fills the cell */}
                                    {href ? (
                                        <a
                                            href={href}
                                            className="block px-2 md:px-4 py-2 w-full h-full text-inherit no-underline"
                                        >
                                            {data[header][index] ?? ""}
                                        </a>
                                    ) : (
                                        <div className="px-2 md:px-4 py-2">
                                            {data[header][index] ?? ""}
                                        </div>
                                    )}
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
                                        className="relative z-10 cursor-pointer text-red-600 hover:text-red-800"
                                        onClick={(e) => {
                                            // Prevent the row link from triggering when clicking the action button
                                            e.stopPropagation();
                                            functionColumn.onClick(index);
                                        }}
                                    >
                                        <Trash2 className="w-4 h-4 inline" />
                                    </button>
                                </td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

import ReactMarkdown from "react-markdown";
import "./Markdown.css";

interface MarkdownProps {
    text: string;
    className?: string;
}

export function Markdown({ text, className }: MarkdownProps) {
    return (
        <div className={`markdown ${className}`}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );
}

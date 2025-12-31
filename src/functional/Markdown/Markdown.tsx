import ReactMarkdown from "react-markdown";
import "./Markdown.css";

interface MarkdownProps {
    text: string;
}

export function Markdown({ text }: MarkdownProps) {
    return (
        <div className="markdown">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );
}

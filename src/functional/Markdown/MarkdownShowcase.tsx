import { Markdown } from "./Markdown";

export function MarkdownShocase() {
    const markdownTest = `
# Heading Level 1

This is a paragraph with some **bold text**, some *italic text*, and a [link to Next.js](https://nextjs.org).

## Heading Level 2

Here is some inline code: \`const x = 10;\`

### Heading Level 3

A code block in JavaScript:

\`\`\`js
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");
\`\`\`

Another paragraph to check spacing and line height.

### Unordered List

- Item 1
- Item 2
  - Nested item 2a
  - Nested item 2b
- Item 3

### Mixed Content

You can mix lists, links, and inline code like this: \`npm install react-markdown\` and visit [GitHub](https://github.com).

`;

    return <Markdown text={markdownTest} />;
}

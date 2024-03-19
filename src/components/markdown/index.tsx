/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import MarkdownJsx from "markdown-to-jsx";

// Create React component standard way
function _markdown({ content }: { content: string }) {
  return <MarkdownJsx>{content}</MarkdownJsx>;
}

// Convert React component to Qwik component
export const Markdown = qwikify$(_markdown);

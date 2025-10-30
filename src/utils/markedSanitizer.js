import { Marked } from "marked";
import sanitize from "sanitize-html";
import TurndownService from "turndown";

export default function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();
  const marked = new Marked();

  // 1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize HTML
  const sanitizedHtml = sanitize(convertedHtml, {
    allowedTags: sanitize.defaults.allowedTags,
  });

  // 3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

/**
 * @ldesign/markdown - Markdown 编辑器
 */
export class MarkdownEditor {
  constructor(private container: HTMLElement) { }
  setValue(content: string) { this.container.textContent = content }
  getValue() { return this.container.textContent || '' }
}
export function createMarkdownEditor(container: HTMLElement) { return new MarkdownEditor(container) }


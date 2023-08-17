import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import "github-markdown-css/github-markdown-light.css"

export const Markdown = (props: { children: string }) => {
  return (
    <ReactMarkdown children={props.children} remarkPlugins={[remarkGfm]} className="markdown-body" />
  )
}
import { ScrollRestoration } from "react-router-dom"
import { Markdown } from "../components/markdown"

const homeText = `
# これはReactMarkdownとTailwindのテストです。

構築が難しかった(粉蜜柑)

## Markdown

[react-markdown](https://github.com/remarkjs/react-markdown)を使うとMarkdownをHTMLにできるよ  
[remark-gfm](https://github.com/remarkjs/remark-gfm)でテーブルとチェックボックスが使えるようになるよ  
[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)でGitHub風のスタイルを当ててるよ

## Tailwind

脱CSSだよ  
classNameにいろいろつけてスタイリングするよ  
\`\`\`
<div className="bg-gray-100 font-bold m-2></div>
\`\`\`
みたいな感じ  
メディアクエリも書けるらしいよ

`

export const Home = () => {
  return (
    <>
      <Markdown children={homeText} />
      <ScrollRestoration />
    </>
  )
}
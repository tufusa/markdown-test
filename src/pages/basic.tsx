import { Markdown } from "../components/markdown"

const basicText = `
## プレーンなやつのテスト

1. normal
1. normal

- これ
- どうなの？
`

export const Basic = () => (
  <Markdown children={basicText} />
)
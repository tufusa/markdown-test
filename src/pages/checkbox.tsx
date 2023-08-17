import { Markdown } from "../components/markdown"

const checkboxText = `
## チェックボックスのテスト

- [ ] ToDo
- [x] Done

これもできちゃう
`

export const Checkbox = () => (
  <Markdown children={checkboxText} />
)
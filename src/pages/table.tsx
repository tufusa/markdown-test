import { Markdown } from "../components/markdown"

const tableText = `
## テーブルのテスト
| Header1  |             Header2              |        Header3 |
| :------- | :------------------------------: | -------------: |
| A        |                B                 |              C |
| いつも   |             使ってる             |   テーブル用の |
| 拡張機能 | [Markdown Table][markdown-table] | が使えないから |
| ちょっと |                不                |             便 |

と思いきやコマンドパレットから実行したら普通に使えた ***God***  
なんと参照リンクも使える すごい[^1]

[markdown-table]: https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable
[^1]: 索引まで使えるんだが ヤバ
`

export const TableTest = () => {
  return (
    <>
      <Markdown children={tableText} />
    </>
  )
}
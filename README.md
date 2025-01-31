# 記号の復号化

半角カタカナで作られた記号(文字列)を一定の法則にしたがって数値(文字列)に変換します。
カンマ区切りで標準出力に出力するのでcsvに書き込めます。

## 法則

| ﾖ | ｷ | ｸ | ﾗ | ｼ | ｺ | ﾚ | ﾂ | ﾄ | ﾒ |
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 |

### 例

`
"ｷｷﾒ5" => "2200000"
`
`
"ﾄﾒｼﾒ3+ﾂﾒ4" => "985000"
`
`
"ｸｸｼｼ+ﾒ2" => "335500"
`
`
"ﾒ" => "1"
`
`
"" => ""
`

## ルール

基本はカタカナを数値に置き換えているが、記号に数字があるものは直前の数字をその数だけ繰り返す。

`
"ﾒﾒ" =  "ﾒ2" = "00"
`
`
"ﾂﾒﾒﾒﾒ" = "ﾂﾒ4" = "80000"
`

## イレギュラーな表記

・"ﾒ"一文字だけの場合は"0"ではなく"1"とする。

`
"ﾒ" = "1"
`

・"+"が入っている記号は2通りのパターンがある。

パターン1: "+"の直後が"0"である場合は"+"を取り除いてそのまま変換する。

`
"ｸｸｼｼ+ﾒ2" => "3355+00" = "335500"
`

パターン2: "+"の直後が"0"以外の場合は"+"の前と後を足し算する。

`
"ﾄﾒｼﾒ3+ﾂﾒ4" => "905000+80000" = "985000"
`

## HOW TO

1\. ./src/list/lists.tsに変換したい文字列を記入します。

2\. 標準出力のみで確認します。

```shell
npm run ts
```

3\.  output.csvに書き出します。

```shell
npm run output
```

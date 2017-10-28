Unifes
===

## 使い方

```bash
$ docker-compose up
```

## Routes

- /form: 入力ページ
- /word: 表示ページ

## フォルダ構成

### public
ここにjsとかcssを書いて、viewで読み込ませれば使えるよ
読み込ませ方は、 `views/word.jade` を参考にしてね

### views
jadeテンプレートでhtmlファイルが書かれているよ

### routes
MVCで言うところのコントローラだよ

### models
MVCで言うところのモデルだよ

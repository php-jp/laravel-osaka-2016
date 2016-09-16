# laravel・osaka イベントサイトリポジトリ

## 手順

```
$ gulp build

$ gulp

$ gulp server
```

## ページ構成

- トップページ（index.html）
- セッション詳細（sessionDetail.html）

## ディレクトリについて

### jade

index.jade
+ _cover.jade + _footer--ver2.jade

sessionDetail.jade
+ _header.jade + _footer--ver2.jade

_cover.jade：pc用？
_header.jade：セッション詳細ページのヘッダー
_footer--ver2.jade：共通フッター

### sass

index.scss

sessionDetail.scss

※common.scssは最初のやつなので、あとで削除する。

_mixin.scss：色、breakpoint、メディアクエリ

## img

- サイト内に使用する画像データ
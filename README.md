# 【Cloudflare Workers】Bun+HonoでREST APIの作成　使えるhonoルーティングのテクニックを紹介！！

## YouTube

[!["【Cloudflare Workers】Bun+HonoでREST APIの作成　使えるhonoルーティングのテクニックを紹介！！"](https://i.ytimg.com/vi/21FEPVYR7Vg/maxresdefault.jpg)](https://youtu.be/21FEPVYR7Vg)

## 技術選定

- Bun
- TypeScript
- Hono
- Drizzle
- Cloudflare D1
- Cloudflare Workers

## 初期設定

### NodeModule をインストール

```bash
npm install
```

### データベースを作成

```bash
npx wrangler d1 create stock-trade-db
```

### wrangler.toml に追記

```toml
[[d1_databases]]
binding = "DB"
database_name = "stock-trade-db"
database_id = "<unique-ID-for-your-database>"
```

`<unique-ID-for-your-database>`はデータベースを作成したときに出力されるID

### テーブルのスキーマを作成

```bash
npx drizzle-kit generate
```

### ローカルデータベースにテーブルを作成

```bash
npx wrangler d1 migrations apply stock-trade-db --local
```

### リモートデータベースにテーブルを作成

```bash
npx wrangler d1 migrations apply stock-trade-db --remote
```
      
## テーブル

### テーブル名 stock_table

| No. | カラム名   | データ型 | 主キー | 備考       |
| --- | ---------- | -------- | :----: | ---------- |
| 1   | code       | text     |   ○    | 証券コード |
| 2   | stock_name | text     |        | 銘柄名     |
| 3   | market     | text     |   　   | 市場       |

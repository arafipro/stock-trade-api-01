# 【Cloudflare Workers】Bun+HonoでREST APIの作成　使えるhonoルーティングのテクニックを紹介！！

## YouTube

[!["【Cloudflare Workers】Bun+HonoでREST APIの作成　使えるhonoルーティングのテクニックを紹介！！"](https://i.ytimg.com/vi/jaYkXW8II-k/maxresdefault.jpg)](https://youtu.be/jaYkXW8II-k)

## 技術選定

- Bun
- TypeScript
- Hono
- Drizzle
- Cloudflare Workers
- Cloudflare D1

## 初期設定

### NodeModule をインストール

```bash
bun install
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

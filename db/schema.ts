import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const stockTable = sqliteTable("stock_table", {
  code: text("code", { length: 4 }).primaryKey(),
  stockName: text("stock_name", { length: 128 }).notNull(),
  market: text("market", { length: 32 }).notNull(),
});

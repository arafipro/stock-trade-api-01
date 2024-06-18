import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const stockTable = sqliteTable("stock_table", {
  code: text("code", { length: 4 }).primaryKey(),
  stockName: text("stock_name").notNull(),
  market: text("market").notNull(),
});
